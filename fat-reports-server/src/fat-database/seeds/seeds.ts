import { Injectable, OnModuleInit } from '@nestjs/common';
import { TestSuiteRepository } from '../repositories/test-suite.repository';

@Injectable()
export class Seeds implements OnModuleInit {
  constructor(private testSuiteRepo: TestSuiteRepository) {}

  public async onModuleInit() {
    await this.seedTestSuite();
    await this.seedTestScripts();
  }

  public async seedTestSuite() {
    if ((await this.testSuiteRepo.count()) > 0) {
      return;
    }
    console.log('to be continued ');
  }

  public async seedTestScripts() {
    console.log('continued');
  }
}
