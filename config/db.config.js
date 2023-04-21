module.exports = {
    HOST: "localhost",
    USER: "ftpuser",
    PASSWORD: "ftppg123",
    DB: "ftpdb",
    dialect: "postgres",
    PORT: 5433,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    }
  };