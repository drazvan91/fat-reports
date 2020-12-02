import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlApiModule } from './graphql-api/graphql-api.module';
import { FatDatabaseModule } from './fat-database/fat-database.module';

@Module({
  imports: [GraphqlApiModule, FatDatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
