import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PatientFoodLog } from "./PatientFoodLog";

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;
  
  @OneToMany(() => PatientFoodLog, (log) => log.patient)
  foodLogs!: PatientFoodLog[];
}
