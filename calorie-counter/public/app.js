import { ListTemplate } from './classes/ListMealItem.js';
import { Meal } from './classes/Meal.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const foodName = document.querySelector('#food');
const calorieCount = document.querySelector('#calorie');
const consumedDate = document.querySelector('#dateConsumed');
const ul = document.querySelector('ul');
const totalEl = document.querySelector('.totalCount');
const list = new ListTemplate(ul, totalEl);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let mealInfo;
    mealInfo = [
        foodName.value,
        type.value,
        consumedDate.value,
        calorieCount.valueAsNumber,
    ];
    let foodEntry;
    foodEntry = new Meal(...mealInfo);
    list.render(foodEntry, 'last');
});
