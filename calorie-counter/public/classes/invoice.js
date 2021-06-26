export class breakfast {
    constructor(food, calories) {
        this.food = food;
        this.calories = calories;
    }
    format() {
        return `You ate ${this.food} as breakfast`;
    }
}
