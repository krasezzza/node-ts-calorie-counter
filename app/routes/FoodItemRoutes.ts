import express from "express";
import { FoodItemsController } from "../controllers/FoodItemsController";

const router = express.Router();

router.get("/", FoodItemsController.getAllFoodItems);
router.get("/:id", FoodItemsController.getFoodItemById);
router.post("/", FoodItemsController.createFoodItem);
router.delete("/:id", FoodItemsController.deleteFoodItem);

export { router as foodItemRoutes };
