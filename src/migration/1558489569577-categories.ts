import {MigrationInterface, QueryRunner} from "typeorm";

class categories1558489569577 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.manager.query(`create table category (
        category_id INTEGER PRIMARY KEY AUTOINCREMENT,
        category_code varchar(8) not null,
        category_name varchar(20) not null,
        category_description varchar(255) default 'no description'
      )`);

      await queryRunner.query(`insert into category(category_code, category_name, category_description) values("001", "pates", "pates longues et tagliatelle pastazara")`);
      await queryRunner.query(`insert into category(category_code, category_name, category_description) values("002", "lentilles", "lentilles première qualité")`);
      await queryRunner.query(`insert into category(category_code, category_name, category_description) values("003", "café", "café arabica")`);
      await queryRunner.query(`insert into category(category_code, category_name, category_description) values("004", "sauce tomates", "sauce pastazara")`);
      await queryRunner.query(`insert into category(category_code, category_name) values("005", "confiture")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable("category");
    }
}

module.exports = categories1558489569577;