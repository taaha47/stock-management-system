import {MigrationInterface, QueryRunner} from "typeorm";

class product1558491646748 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.manager.query(`create table product (
        prd_id INTEGER PRIMARY KEY AUTOINCREMENT,
        prd_name varchar(20) not null,
        prd_packaging varchar(20) not null,
        prd_description varchar(255) default 'no description',
        prd_category_id INTEGER,
        CONSTRAINT fk_prd_cat FOREIGN KEY (prd_category_id) REFERENCES category(category_id)
        ON UPDATE CASCADE 
        ON DELETE RESTRICT
      )`);

    await queryRunner.query(`insert into product(prd_name, prd_packaging, prd_description, prd_category_id) 
      values("pastazara", "1 Kg", "pates longues et tagliatelle pastazara", 1)`);
    await queryRunner.query(`insert into product(prd_name, prd_packaging, prd_description, prd_category_id)
      values("carion", "sac 2 kg", "cafe aromatise", 4)`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("product");
  }
}

module.exports = product1558491646748;