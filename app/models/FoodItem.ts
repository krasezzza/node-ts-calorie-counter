import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class FoodItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column("decimal")
  calories!: number; // per 100g

  @Column({ default: false })
  isDeleted!: boolean;
}
