import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateFKs1606924869285 implements MigrationInterface {
  name = 'UpdateFKs1606924869285';

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Run migration ' + this.name);

    await queryRunner.query(
      `ALTER TABLE "test_script" DROP CONSTRAINT "fk_test_suite"`,
    );
    await queryRunner.query(
      `ALTER TABLE "test_script" ADD CONSTRAINT "FK_275e1561241c1e190e44b3f1af6" FOREIGN KEY ("test_suite_guid") REFERENCES "test_suite"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "test_script" DROP CONSTRAINT "FK_275e1561241c1e190e44b3f1af6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "test_script" ADD CONSTRAINT "fk_test_suite" FOREIGN KEY ("test_suite_guid") REFERENCES "test_suite"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
