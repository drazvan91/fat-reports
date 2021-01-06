import { Avatar, List } from 'antd';
import { TestScriptModel } from '../TestSuites.page-queries';

interface TestSuiteItemProps {
  testScript: TestScriptModel;
}

export function TestSuiteItem(props: TestSuiteItemProps) {
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
