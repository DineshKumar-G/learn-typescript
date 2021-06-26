import { MealTypes } from '../interfaces/HasMealLedger';
export class Meal {
  constructor(
    readonly food: string,
    readonly type: MealTypes,
    readonly date: string,
    readonly calories: number
  ) {}

  mealLog() {
    return `You ate ${this.food} as ${this.type} on ${this.date} containing ${this.calories} calories.`;
  }

  capitalizeFoodType() {
    return this.type.charAt(0).toUpperCase() + this.type.slice(1);
  }
}
