import { IFoodItem } from "../interfaces";

export class FoodItemFactory {
  static create(requestBody: IFoodItem): IFoodItem {
      const foodItem: IFoodItem = {
        name: requestBody.name,
        calories: requestBody.calories,
      };
  
      return foodItem;
    }
}
