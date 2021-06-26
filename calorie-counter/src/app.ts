import { ListTemplate } from './classes/ListMealItem.js';
import { Meal } from './classes/Meal.js';
import { HasMealLedger, MealTypes } from './interfaces/HasMealLedger.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type: any = document.querySelector('#type');
const foodName = document.querySelector('#food') as HTMLInputElement;
const calorieCount = document.querySelector('#calorie') as HTMLInputElement;
const consumedDate = document.querySelector(
  '#dateConsumed'
) as HTMLInputElement;
const ul = document.querySelector('ul')!;
const totalEl = document.querySelector('.totalCount') as HTMLSpanElement;
const list = new ListTemplate(ul, totalEl);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let mealInfo: [string, MealTypes, string, number];
  mealInfo = [
    foodName.value,
    type.value,
    consumedDate.value,
    calorieCount.valueAsNumber,
  ];
  let foodEntry: HasMealLedger;

  foodEntry = new Meal(...mealInfo);

  list.render(foodEntry, 'last');
});
