import {MigrationInterface, QueryRunner} from "typeorm";

class stock1558565437534 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.manager.query(`create table stock (
        stk_id INTEGER PRIMARY KEY AUTOINCREMENT,
        stk_code varchar(8) default 'none',
        stk_product_id INTEGER,
        stk_quantity int,
        CONSTRAINT fk_stk_prd FOREIGN KEY (stk_product_id) REFERENCES product(prd_id)
        ON UPDATE CASCADE 
        ON DELETE CASCADE
      )`);

    await queryRunner.query(`insert into stock(stk_product_id, stk_quantity) values(1, 500)`);
    await queryRunner.query(`insert into stock(stk_product_id, stk_quantity) values(2, 390)`)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("stock");
  }
}

module.exports = stock1558565437534;