import * as React from 'react';

import { Collapse, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useMemo } from 'react';

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

function getTestSuites(): TestSuiteModel[] {
  return [
    {
      id: '1',
      name: 'Home page test suit',
      testScripts: [
        {
          id: '1',
          name: 'Some test',
        },
        {
          id: '2',
          name: 'Some test 2',
        },
      ],
    },
    {
      id: '32',
      name: 'Home page test suit2',
      testScripts: [
        {
          id: '1',
          name: 'Some test',
        },
      ],
    },
    {
      id: '453',
      name: 'Home page test suit3',
      testScripts: [
        {
          id: '1',
          name: 'Some test',
        },
      ],
    },
    {
      id: '123',
      name: 'Home page test suit4',
      testScripts: [
        {
          id: '1',
          name: 'Some test',
        },
      ],
    },
  ];
}

export function TestSuitesPage() {
  const testSuites = useMemo(() => getTestSuites(), []);

  console.log('Hey there', testSuites);

  return (
    <Collapse defaultActiveKey={['1']}>
      {testSuites.map((testSuite) => {
        return (
          <Panel
            header={testSuite.name}
            key={testSuite.id}
            extra={getToolbarExtraHeader()}
          >
            <div>sd</div>
          </Panel>
        );
      })}
    </Collapse>
  );
}
