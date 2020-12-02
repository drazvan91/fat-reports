import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlApiModule } from './graphql-api/graphql-api.module';

@Module({
  imports: [GraphqlApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
