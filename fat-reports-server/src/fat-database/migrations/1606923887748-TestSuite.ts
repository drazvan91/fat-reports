import { MigrationInterface, QueryRunner } from 'typeorm';

export class TestSuite1606923887748 implements MigrationInterface {
  name = 'TestSuite1606923887748';

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Run migration ' + this.name);

    await queryRunner.query(
      `CREATE TABLE "test_suite" ("guid" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_58c748209b0bddca79757a97e9e" PRIMARY KEY ("guid"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "test_suite"`);
  }
}
