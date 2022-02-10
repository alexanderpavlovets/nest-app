/* eslint-disable */
require('dotenv').config();

console.log(`I got some env variable: ${process.env.SOME_VAR}`)

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'migrations',
  },
};
