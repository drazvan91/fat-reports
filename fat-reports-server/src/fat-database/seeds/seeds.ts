import { Injectable, OnModuleInit } from '@nestjs/common';
import { TestScriptRepo } from '../repositories/test-script.repo';
import { TestSuiteRepo } from '../repositories/test-suite.repo';

@Injectable()
export class Seeds implements OnModuleInit {
  constructor(
    private testSuiteRepo: TestSuiteRepo,
    private testScriptRepo: TestScriptRepo,
  ) {}

  public async onModuleInit() {
    await this.seedTestSuite();
    await this.seedTestScripts();
  }

  public async seedTestSuite() {
    if ((await this.testSuiteRepo.count()) > 0) {
      return;
    }

    console.log('Running seed for TestSuites');

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
    if ((await this.testScriptRepo.count()) > 0) {
      return;
    }

    console.log('Running seed for TestScripts');

    await this.testScriptRepo.create({
      guid: 'guid-script-1',
      name: 'Test script 1',
      testSuiteGuid: 'guid1',
    });
    await this.testScriptRepo.create({
      guid: 'guid-script-2',
      name: 'Test script 2',
      testSuiteGuid: 'guid1',
    });
    await this.testScriptRepo.create({
      guid: 'guid-script-3',
      name: 'Test script 3',
      testSuiteGuid: 'guid1',
    });

    await this.testScriptRepo.create({
      guid: 'guid-script-4',
      name: 'Test script 4',
      testSuiteGuid: 'guid2',
    });
    await this.testScriptRepo.create({
      guid: 'guid-script-5',
      name: 'Test script 5',
      testSuiteGuid: 'guid2',
    });

    await this.testScriptRepo.create({
      guid: 'guid-script-6',
      name: 'Test script 6',
      testSuiteGuid: 'guid3',
    });
  }
}
