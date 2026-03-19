import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

type CardType = 'income' | 'outcome' | 'balance' | 'zero';

enum ValueCssClass {
  INCOME = 'income',
  OUTCOME = 'outcome',
  ZERO = 'zero',
}

@Component({
  selector: 'app-balance-card',
  imports: [MatCardModule],
  templateUrl: './balance-card.html',
  styleUrl: './balance-card.scss',
})
export class BalanceCard {

  type = input.required<CardType>();
  label = input.required<string>();
  value = input.required<number>();

  cssClass = computed<ValueCssClass>(() => {
    if (this.type() === ValueCssClass.INCOME) {
      return ValueCssClass.INCOME;
    }

    if (this.type() === ValueCssClass.OUTCOME) {
      return ValueCssClass.OUTCOME;
    }

    if (this.value() === 0) {
      return ValueCssClass.ZERO;
    }

    return this.value() > 0 ? ValueCssClass.INCOME : ValueCssClass.OUTCOME;
  });
}
