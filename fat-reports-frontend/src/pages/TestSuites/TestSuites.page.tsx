import * as React from 'react';
import { ApolloClient, gql, InMemoryCache, useQuery } from '@apollo/client';

import { Collapse, Select, List, Avatar } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useMemo, useEffect, useState } from 'react';

const { Panel } = Collapse;

function getToolbarExtraHeader() {
  return (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
}

interface TestSuiteModel {
  name: string;
  id: string;
  testScripts: TestScriptModel[];
}

interface TestScriptModel {
  id: string;
  name: string;
}

const TEST_SUITES_QUERY = gql`
  {
    testSuites {
      id
      name
      testScripts {
        id
        name
      }
    }
  }
`;

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

interface GetTestSuitesResult {
  testSuites: TestSuiteModel[];
}

export function TestSuitesPage() {
  // const testSuites = useMemo(() => getTestSuites(), []);
  const { loading, error, data } = useQuery<GetTestSuitesResult>(
    TEST_SUITES_QUERY,
    {
      client,
    }
  );

  if (loading) {
    return <div>Loading. Please wait.</div>;
  }

  if (error || !data) {
    return <div>Error: {error}</div>;
  }

  console.log(data);

  const activeIds = data.testSuites.map((ts) => ts.id);

  return (
    <Collapse defaultActiveKey={activeIds}>
      {data.testSuites.map((testSuite) => {
        return (
          <Panel
            header={testSuite.name}
            key={testSuite.id}
            extra={getToolbarExtraHeader()}
          >
            <List
              dataSource={testSuite.testScripts}
              renderItem={(testScript) => {
                return <TestSuiteItem testScript={testScript}></TestSuiteItem>;
              }}
            ></List>
          </Panel>
        );
      })}
    </Collapse>
  );
}

interface TestSuiteItemProps {
  testScript: TestScriptModel;
}

function TestSuiteItem(props: TestSuiteItemProps) {
  const testSuite = props.testScript;

  return (
    <List.Item>
      <List.Item.Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={<a href="https://ant.design">{testSuite.name}</a>}
        description="A description to be added later"
      />
    </List.Item>
  );
}
