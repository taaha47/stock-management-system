import {MigrationInterface, QueryRunner} from "typeorm";

class DefaultUser1558484686664 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.manager.query(`create table user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username varchar(12) not null,
        passwordHash varchar(120) not null,
        role varchar(5) default '-1'
      )`);
      await queryRunner.query(`insert into user(username, passwordHash) values("admin", "0000")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable("user");
    }

}

module.exports = DefaultUser1558484686664;
