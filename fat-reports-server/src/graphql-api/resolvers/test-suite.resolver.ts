import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { TestSuite } from '../graphql-models';

@Resolver('TestSuite')
export class TestSuiteResolver {
  @Query()
  async testSuites() {
    // const testSuites = await repository.getAllTestSuites();

    return [
      {
        id: 1,
        name: 'something else',
      },
      {
        id: 2,
        name: 'test Suite 2',
      },
    ];
  }

  @ResolveField()
  async testScripts(@Parent() testSuite) {
    if (testSuite.id === 1) {
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
