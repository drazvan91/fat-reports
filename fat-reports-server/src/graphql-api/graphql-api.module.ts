import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { join } from 'path';
import { isTypeReferenceNode } from 'typescript';
import { TestSuiteResolver } from './resolvers/test-suite.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql-api/graphql-models.ts'),
      },
    }),
  ],
  providers: [TestSuiteResolver],
})
export class GraphqlApiModule {}
