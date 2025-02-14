import { DataSource } from "typeorm";
import dotenv from 'dotenv';
import "reflect-metadata";
import { Patient } from "../models/Patient";
import { FoodItem } from "../models/FoodItem";
import { PatientFoodLog } from "../models/PatientFoodLog";

dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } =
  process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST || "localhost",
  port: parseInt(DB_PORT || "5432"),
  username: DB_USERNAME || "postgres",
  password: DB_PASSWORD || "postgres",
  database: DB_DATABASE || "calorie_tracker",
  synchronize: true,
  logging: true,
  entities: [Patient, FoodItem, PatientFoodLog],
});
