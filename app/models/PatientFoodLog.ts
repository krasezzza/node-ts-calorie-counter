import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { FoodItem } from "./FoodItem";
import { Patient } from "./Patient";

@Entity()
export class PatientFoodLog {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Patient, (patient) => patient.foodLogs)
  patient!: Patient;

  @ManyToOne(() => FoodItem)
  foodItem!: FoodItem;

  @Column("decimal")
  gramsQuantity!: number;

  @CreateDateColumn()
  date!: Date;
}
