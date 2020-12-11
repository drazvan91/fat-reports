import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { TestSuiteRepo } from 'src/fat-database/repositories/test-suite.repository';
import { TestSuite } from '../graphql-models';

@Resolver('TestSuite')
export class TestSuiteResolver {
  constructor(private testSuiteRepo: TestSuiteRepo) {}

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
  async testScripts(@Parent() testSuite) {
    if (testSuite.id === 'guid1') {
      return [
        { id: 1, name: 'test script 1', category: 1 },
        { id: 2, name: 'test script 3', category: 3 },
        { id: 3, name: 'test script 2', category: 2 },
      ];
    } else {
      return [
        { id: 4, name: 'test script 4', category: 1 },
        { id: 5, name: 'test script 5', category: 3 },
      ];
    }
  }
}
