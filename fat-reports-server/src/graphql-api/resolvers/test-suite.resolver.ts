import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { TestScriptRepo } from 'src/fat-database/repositories/test-script.repo';
import { TestSuiteRepo } from 'src/fat-database/repositories/test-suite.repo';
import { TestSuite } from '../graphql-models';

@Resolver('TestSuite')
export class TestSuiteResolver {
  constructor(
    private testSuiteRepo: TestSuiteRepo,
    private testScriptRepo: TestScriptRepo,
  ) {}

  @Query()
  async testSuites() {
    const testSuites = await this.testSuiteRepo.getAll();

    const result = testSuites.map((testSuite) => {
      return {
        id: testSuite.guid,
        name: testSuite.name,
      };
    });

    return result;
  }

  @ResolveField()
  async name(@Parent() testSuite) {
    if (testSuite.name) {
      return testSuite.name;
    }

    const suite = await this.testSuiteRepo.getById(testSuite.id);

    return suite.name;
  }

  @ResolveField()
  async testScripts(@Parent() testSuite) {
    const scripts = await this.testScriptRepo.getBySuiteId(testSuite.id);

    return scripts.map((s) => {
      return {
        id: s.guid,
        testSuite: {
          id: s.testSuiteGuid,
        },
        name: s.name,
        category: 1,
      };
    });
  }
}
