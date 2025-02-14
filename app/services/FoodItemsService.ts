import { FoodItem } from "../models/FoodItem";
import { AppDataSource } from "../database";
import { Repository } from "typeorm";

export class FoodItemsService {
  private _repository: Repository<FoodItem>;

  constructor() {
    // should be done with dependency injection
    this._repository = AppDataSource.getRepository(FoodItem);
  }

  async getAllFoodItems(): Promise<FoodItem[]> {
    return this._repository.find();
  }

  async getFoodItemById(id: number): Promise<FoodItem> {
    const foodItem = await this._repository.findOne({ where: { id } });
    if (!foodItem) {
      throw new Error(`Food item with id ${id} not found`);
    }
    return foodItem;
  }

  async createFoodItem(foodItem: FoodItem): Promise<FoodItem> {
    const newFoodItem = this._repository.create(foodItem);
    return this._repository.save(newFoodItem);
  }

  async deleteFoodItem(id: number, foodItem: Partial<FoodItem>): Promise<FoodItem> {
    await this._repository.update(id, { ...foodItem, isDeleted: true });
    return await this.getFoodItemById(id);
  }
}
