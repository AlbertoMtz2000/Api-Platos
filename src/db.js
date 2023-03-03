import {createPool} from 'mysql2/promise'
import {
    DB_DATABASE,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_USER,
  } from "./config.js";

export const pool = createPool({
    host: DB_HOST,//'127.0.0.1'
    user: DB_USER,//'root'
    password: DB_PASSWORD,//''
    port: DB_PORT,//3306
    database: DB_DATABASE//'restapi_platos'
})