const SnakeNamingStrategy =
  require("typeorm-naming-strategies").SnakeNamingStrategy;

module.exports = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "sese",
  password: "1234",
  database: "firstDB",
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  namingStrategy: new SnakeNamingStrategy(),
};
