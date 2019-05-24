import { User, Category, Supplier, Product, Stock, PurchaseOrder, PurchaseOrderLine } from "./repository/entities";
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
                    logger: "simple-console",
                    database: "./src/assets/data/database.sqlite",
                    entities: [User, Category, Supplier, Product, Stock, PurchaseOrder, PurchaseOrderLine]
                });
            } catch (e) {
                console.log(e.message);
                console.log("Unable to connect to database");
            }
        }

        return DatabaseConnection.instance;
    }
}
