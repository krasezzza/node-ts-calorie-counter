export interface IPatient {
  id?: number;
  firstName: string;
  lastName: string;
  foodLogs: IPatientFoodLog[];
}

export interface IPatientFoodLog {
  id?: number;
  patientId: number;
  foodItemId: number;
  gramsQuantity: number;
  date: Date;
}

export interface IFoodItem {
  id?: number;
  name: string;
  calories: number;
  isDeleted?: boolean;
}
