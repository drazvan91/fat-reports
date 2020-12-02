import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { TestScript } from './test-script.entity';

@Entity()
export class TestSuite {
  @PrimaryColumn()
  guid: string;

  @Column()
  name: string;

  @OneToMany(() => TestScript, (testScript) => testScript.testSuite)
  testScripts: TestScript[];
}
