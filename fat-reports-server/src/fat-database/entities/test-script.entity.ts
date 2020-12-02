import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { TestSuite } from './test-suite.entity';

@Entity()
export class TestScript {
  @PrimaryColumn()
  guid: string;

  @Column()
  name: string;

  @Column({ name: 'test_suite_guid' })
  testSuiteGuid: string;

  @ManyToOne(() => TestSuite, (testSuite) => testSuite.testScripts)
  @JoinColumn({ name: 'test_suite_guid' })
  testSuite: TestSuite;
}
