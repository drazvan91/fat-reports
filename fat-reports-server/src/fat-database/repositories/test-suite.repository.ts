import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestSuite } from '../entities/test-suite.entity';

@Injectable()
export class TestSuiteRepo {
  constructor(
    @InjectRepository(TestSuite) private testSuiteRepo: Repository<TestSuite>,
  ) {}

  public count() {
    return this.testSuiteRepo.count();
  }

  public create(newEntry: TestSuite) {
    return this.testSuiteRepo.save(newEntry);
  }

  public getAll() {
    return this.testSuiteRepo.find();
  }
}
