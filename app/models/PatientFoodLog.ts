import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, JoinColumn } from "typeorm";
import { FoodItem } from "./FoodItem";
import { Patient } from "./Patient";

@Entity()
export class PatientFoodLog {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Patient, (patient) => patient.foodLogs)
  @JoinColumn({ name: 'patient_id' })
  patient!: Patient;

  @ManyToOne(() => FoodItem)
  @JoinColumn({ name: 'food_item_id' })
  foodItem!: FoodItem;

  @Column("decimal")
  gramsQuantity!: number;

  @CreateDateColumn()
  date!: Date;
}
