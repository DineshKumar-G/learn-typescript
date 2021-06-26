export class Meal {
    constructor(food, type, date, calories) {
        this.food = food;
        this.type = type;
        this.date = date;
        this.calories = calories;
    }
    mealLog() {
        return `You ate ${this.food} as ${this.type} on ${this.date} containing ${this.calories} calories.`;
    }
    capitalizeFoodType() {
        return this.type.charAt(0).toUpperCase() + this.type.slice(1);
    }
}
