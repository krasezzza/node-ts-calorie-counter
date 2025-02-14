import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { AppDataSource } from './database';

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 5000;

app.use(express.json());
app.use(cors());

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  console.log("Database has been initialized!");
}).catch((error) => console.log(error));

export default app;
