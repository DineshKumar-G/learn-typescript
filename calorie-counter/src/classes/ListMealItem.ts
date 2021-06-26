import { HasMealLedger } from '../interfaces/HasMealLedger';

export class ListTemplate {
  constructor(
    private container: HTMLUListElement,
    private totalEl: HTMLSpanElement
  ) {}

  render(foodEntry: HasMealLedger, pos: 'first' | 'last') {
    const li = document.createElement('li');

    const h4 = document.createElement('h4');
    h4.innerText = foodEntry.capitalizeFoodType();
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = foodEntry.mealLog();
    li.append(p);

    this.totalEl.innerText = (
      parseInt(this.totalEl.innerText) + foodEntry.calories
    ).toString();
    console.log('>>');

    if (pos === 'first') {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
