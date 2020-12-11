import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestScript } from './entities/test-script.entity';
import { TestSuite } from './entities/test-suite.entity';
import { TestSuite1606923887748 } from './migrations/1606923887748-TestSuite';
import { AddTestScriptTable1606924685523 } from './migrations/1606924685523-AddTestScriptTable';
import { UpdateFKs1606924869285 } from './migrations/1606924869285-UpdateFKs';
import { TestScriptRepo } from './repositories/test-script.repo';
import { TestSuiteRepo } from './repositories/test-suite.repo';
import { Seeds } from './seeds/seeds';

@Module({
  imports: [
    TypeOrmModule.forFeature([TestSuite, TestScript]),
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          logging: ['query', 'error'],
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'example',
          database: 'fatreports',
          entities: ['dist/**/*.entity{.ts,.js}'], // todo: investigate because this looks strange :-?
          autoLoadEntities: true,
          synchronize: false,
          migrationsRun: true,
          migrationsTableName: 'typeorm_migration',
          migrations: [
            TestSuite1606923887748,
            AddTestScriptTable1606924685523,
            UpdateFKs1606924869285,
          ],
        };
      },
    }),
  ],
  exports: [TestSuiteRepo, TestScriptRepo],
  providers: [TestSuiteRepo, TestScriptRepo, Seeds],
})
export class FatDatabaseModule {}
