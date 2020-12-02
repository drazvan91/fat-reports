import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestSuite } from '../entities/test-suite.entity';

@Injectable()
export class TestSuiteRepository {
  constructor(
    @InjectRepository(TestSuite) private testSuiteRepo: Repository<TestSuite>,
  ) {}

  public count() {
    return this.testSuiteRepo.count();
  }
}
