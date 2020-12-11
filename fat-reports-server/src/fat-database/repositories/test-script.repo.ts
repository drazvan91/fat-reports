import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestScript } from '../entities/test-script.entity';

@Injectable()
export class TestScriptRepo {
  constructor(
    @InjectRepository(TestScript) private repo: Repository<TestScript>,
  ) {}

  public count() {
    return this.repo.count();
  }

  public create(newEntry: Partial<TestScript>) {
    return this.repo.save(newEntry);
  }

  public getBySuiteId(guid: string) {
    return this.repo.find({
      testSuiteGuid: guid,
    });
  }
}
