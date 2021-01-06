import { SettingOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { Collapse, List } from 'antd';
import * as React from 'react';
import { TestSuiteItem } from './components/TestSuiteItem.component';
import {
  GetTestSuitesQuery,
  GetTestSuitesResult,
} from './TestSuites.page-queries';

const { Panel } = Collapse;

function getToolbarExtraHeader() {
  return (
    <SettingOutlined
      onClick={(event) => {
        event.stopPropagation();
      }}
    />
  );
}

export function TestSuitesPage() {
  const { loading, error, data } = useQuery<GetTestSuitesResult>(
    GetTestSuitesQuery
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
