import { Injectable, OnModuleInit } from '@nestjs/common';
import { TestSuiteRepo } from '../repositories/test-suite.repository';

@Injectable()
export class Seeds implements OnModuleInit {
  constructor(private testSuiteRepo: TestSuiteRepo) {}

  public async onModuleInit() {
    await this.seedTestSuite();
    await this.seedTestScripts();
  }

  public async seedTestSuite() {
    if ((await this.testSuiteRepo.count()) > 0) {
      return;
    }

    await this.testSuiteRepo.create({
      guid: 'guid1',
      name: 'General tests',
      testScripts: [],
    });
    await this.testSuiteRepo.create({
      guid: 'guid2',
      name: 'Home page tests',
      testScripts: [],
    });
    await this.testSuiteRepo.create({
      guid: 'guid3',
      name: 'Login screen tests',
      testScripts: [],
    });
  }

  public async seedTestScripts() {
    console.log('continued');
  }
}
