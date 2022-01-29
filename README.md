# Task management app with Nestjs stack 

### This project uses yarn, please consider it.

## Notes: 
- Class validator package https://github.com/typestack/class-validator is used here with pipes to validate DTOs
- You should have Docker and pgAdmin installed 
- run Postgress via Docker 
```
docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres // initial download and start
docker container stop postgres-nest // stop
docker container start postgres-nest // start
docker container rm postgres-nest // remove
```
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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
