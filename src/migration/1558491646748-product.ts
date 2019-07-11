import {MigrationInterface, QueryRunner} from "typeorm";

class product1558491646748 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.manager.query(`create table product (
        product_id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_name varchar(20) not null,
        product_code varchar(8) unique not null,
        product_packaging varchar(20) not null,
        product_description varchar(255) default 'no description',
        category_id INTEGER,
        CONSTRAINT fk_prd_cat FOREIGN KEY (category_id) REFERENCES category(category_id)
        ON UPDATE CASCADE 
        ON DELETE RESTRICT
      )`);

    await queryRunner.query(`insert into product(product_name, product_code, product_packaging, product_description, category_id) 
      values("pastazara", "1010", "1 Kg", "pates longues et tagliatelle pastazara", 1)`);
    await queryRunner.query(`insert into product(product_name, product_code, product_packaging, product_description, category_id)
      values("carion", "2020", "sac 2 kg", "cafe aromatise", 4)`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("product");
  }
}

module.exports = product1558491646748;