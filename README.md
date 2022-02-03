# Task management app with Nestjs stack 

### This project uses yarn, please consider it.

## Notes: 
- Class validator package https://github.com/typestack/class-validator is used here with pipes to validate DTOs
- You should have Docker and pgAdmin installed 
- run Postgress via Docker 
```
docker run --name postgres-nest -p 5433:5432 -e POSTGRES_PASSWORD=postgres -d postgres // initial download and start
docker container stop postgres-nest // stop
docker container start postgres-nest // start
docker container rm postgres-nest // remove
```
- First time DB usage: create it via PG admin. Install PGAdmin, Create a server in it to run on port 5433, Create a "nest-app" db in it
- "pg" in dependencies - just a driver for TypeORM and Postgres
- TypeORM Active Record vs Data Mapper approaches - https://github.com/typeorm/typeorm/blob/master/docs/active-record-data-mapper.md
- TypeORM repository.delete - not checking if entity exists, repository.remove - checks that entity exists so seems 2 requests - not good.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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
