import { gql } from '@apollo/client';

export interface TestSuiteModel {
  name: string;
  id: string;
  testScripts: TestScriptModel[];
}

export interface TestScriptModel {
  id: string;
  name: string;
  category: number;
}

export interface GetTestSuitesResult {
  testSuites: TestSuiteModel[];
}

export const GetTestSuitesQuery = gql`
  {
    testSuites {
      id
      name
      testScripts {
        id
        name
        category
      }
    }
  }
`;
