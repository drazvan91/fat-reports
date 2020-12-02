## TypeORM Migrations

### Create a migration

1. Make sure that `ormconfig.json` is properly configured
2. To create an empty migration file use `npm run typeorm migration:create -- -n "YourMigrationName"`,
   or if you have changes, just execute `npm run typeorm migration:generate -- -n "YourMigrationName"`
3. A migration will be created. Add it to `typeorm.config.ts` file next to the existing migrations
4. (optional) use `npm run typeorm migration:run` if you want to execute it manually
5. To revert the latest executed migration use `npm run typeorm migration:revert`
