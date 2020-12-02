import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTestScriptTable1606924685523 implements MigrationInterface {
  name = 'AddTestScriptTable1606924685523';

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Run migration ' + this.name);

    await queryRunner.query(
      `CREATE TABLE "test_script" ("guid" character varying NOT NULL, "name" character varying NOT NULL, "test_suite_guid" character varying NOT NULL, CONSTRAINT "PK_355270f902ebd1606fd4a18bab4" PRIMARY KEY ("guid"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "test_script" ADD CONSTRAINT "fk_test_suite" FOREIGN KEY ("test_suite_guid") REFERENCES "test_suite"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "test_script" DROP CONSTRAINT "fk_test_suite"`,
    );
    await queryRunner.query(`DROP TABLE "test_script"`);
  }
}
