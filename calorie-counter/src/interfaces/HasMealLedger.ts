export type MealTypes = 'Breakfast' | 'Lunch' | 'Snacks' | 'Dinner';

export interface HasMealLedger {
  mealLog(): string;
  capitalizeFoodType(): string;
  calories: number;
}
