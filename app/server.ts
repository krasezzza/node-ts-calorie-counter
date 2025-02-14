import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { AppDataSource } from './database';
import { patientRoutes } from './routes/PatientRoutes';

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/patients", patientRoutes);

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  console.log("Database has been initialized!");
}).catch((error) => console.log(error));

export default app;
