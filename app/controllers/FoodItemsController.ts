import { Request, Response } from "express";
import { FoodItemsService } from "../services/FoodItemsService";
import { FoodItemFactory } from "../factories/FoodItemFactory";

export class FoodItemsController {
  static async getAllFoodItems(req: Request, res: Response) {
    const foodItemsService = new FoodItemsService();

    try {
      const foodItemsList = await foodItemsService.getAllFoodItems();

      if (!foodItemsList.length) {
        return res.status(200).json({ message: "No food items found", data: [] });
      }

      return res.status(200).json({ message: "", data: foodItemsList });
    } catch (error: unknown) {
      return res.status(404).json({ message: "An error occured", data: [] });
    }
  }

  static async getFoodItemById(req: Request, res: Response) {
    const foodItemsService = new FoodItemsService();

    try {
      const foodItemData = await foodItemsService.getFoodItemById(Number(req.params.id));
      return res.status(200).json({ message: "", data: foodItemData });
    } catch (error: unknown) {
      return res.status(404).json({ message: "An error occured", data: [] });
    }
  }

  static async createFoodItem(req: Request, res: Response) {
    const foodItemsService = new FoodItemsService();

    try {
      const foodItemRequest = FoodItemFactory.create(req.body);
      const foodItemResponse = await foodItemsService.createFoodItem(foodItemRequest);
      return res.status(200).json({ message: "", data: foodItemResponse });
    } catch (error: unknown) {
      return res.status(404).json({ message: "An error occured", data: [] });
    }
  }

  static async deleteFoodItem(req: Request, res: Response) {
    const foodItemsService = new FoodItemsService();

    try {
      const foodItemData = await foodItemsService.deleteFoodItem(Number(req.params.id));
      return res.status(200).json({ message: "", data: foodItemData });
    } catch (error: unknown) {
      return res.status(404).json({ message: "An error occured", data: [] });
    }
  }
}
