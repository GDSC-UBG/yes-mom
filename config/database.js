module.exports = {
  development: {
    username: "root",
    password: null,
    database: "database_development",
    host: "localhost",
    dialect: "mysql",
    timezone: "+08:00",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "+08:00",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "+08:00",
  },
};