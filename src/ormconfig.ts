import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: 'sqlite',
  database:  "src/assets/data/database.sqlite",
  entities: [
     'src/repository/entities/*.{.ts,.js}',
  ],
  migrations: [ "src/migration/*.ts"],
  cli: {
    migrationsDir: 'src/migration',
  }
};

module .exports = config;