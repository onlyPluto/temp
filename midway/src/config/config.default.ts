import { MidwayConfig } from "@midwayjs/core"

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: "1657268772631_3120",
  koa: {
    port: 7001,
  },
  //配置数据库连接信息
  orm: {
    type: "mysql",
    host: "127.0.0.1",
    database: "solo",
    username: "root",
    password: "123123123",
    port: 3306,
    synchronize: false,
    logging: false,
  },
  //配置jwt
  jwt: {
    expiresIn: "2d",
  },
  crossDomain: {
    allowMethods: "post",
    origin: "127.0.0.1",
  },
} as MidwayConfig
