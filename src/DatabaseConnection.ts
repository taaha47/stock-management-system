import {User} from "./repository/entities/User.scheme";
import {Product} from "./repository/entities/Product.scheme";
import {Category} from "./repository/entities/Category.scheme";
import {Stock} from "./repository/entities/Stock.scheme";
import {createConnection, Connection} from "typeorm";
import "reflect-metadata";

export default class DatabaseConnection {
    private static instance: Connection;

    private constructor() {}

    static async getInstance() {
        if (!DatabaseConnection.instance) {
            try {
                DatabaseConnection.instance = await createConnection({
                    type: "sqlite",
                    synchronize: true,
                    logger: "simple-console",
                    database: "./src/assets/data/database.sqlite",
                    entities: [User, Product, Category, Stock]
                });
            } catch (e) {
                console.log("Unable to connect to database");
            }
        }

        return DatabaseConnection.instance;
    }
}
