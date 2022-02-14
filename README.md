# Task management app with Nestjs stack 

### This project uses yarn, please consider it.

## Notes: 
- Class validator package https://github.com/typestack/class-validator is used here with pipes to validate DTOs
- You should have Docker and pgAdmin installed 
- run Postgress via Docker 
```bash
docker run --name postgres-nest -p 5433:5432 -e POSTGRES_PASSWORD=postgres -d postgres // initial download and start
docker container stop postgres-nest // stop
docker container start postgres-nest // start
docker container rm postgres-nest // remove
```
- First time DB usage: create it via PG admin. Install PGAdmin, Create a server in it to run on port 5433, Default "postgres" db name is used. Create a "your-name-db" db in it if needed, and change in in ormconfig
- "pg" in dependencies - just a driver for TypeORM and Postgres
- TypeORM Active Record vs Data Mapper approaches - https://github.com/typeorm/typeorm/blob/master/docs/active-record-data-mapper.md
- TypeORM repository.delete - not checking if entity exists, repository.remove - checks that entity exists so seems 2 requests - not good.
- DB Migrations. See config in "app.module.ts"
"typeorm" script is added to compile .ts into .js while running the migration.
```bash
yarn typeorm migration:create -n MigrationName
yarn typeorm migration:run
```

## Migrations flow
- make changes in DB related code - entities
- build the project (if in watch mode - will be builded automatically, BUT! Rebuild it!!! Deleted items are not cleared while nest build = errors )
- generate migration: 
```bash
yarn typeorm migration:generate -n TasksColumnsRenaming
```
- build project once more to build the migrations
- run migrations
```bash
yarn typeorm migration:run
```
- revert if needed
```bash
yarn typeorm migration:revert
```

## Kafka as a module flow: 
- GET http:localhost:3000 - this will call "produceHelloIntoKafka" 
- you should see test.consumer logs the message into the console of server, because it is subscribed with OnModuleInit lifecycle hook

## Confluent schema flow:
- for now, there is no full flow, only first registration of schema (.proto file) when app is up. 
- run docker-compose.schema.yml docker compose to setup the env. Then run the app - you will see generated schema.
- Confluent UI is available on http://localhost:9021/
- "producer.service.ts" is file with schema registration. 


## Installation

```bash
$ yarn install
```

## Running the app
```bash
# environment: postgres + kafka
$ docker-compose up

# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarnstart:prod
```

## Test
```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
