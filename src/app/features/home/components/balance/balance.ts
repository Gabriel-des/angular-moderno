import { Component, computed, input } from '@angular/core';
import { BalanceCard } from "./components/balance-card/balance-card";

@Component({
  selector: 'app-balance',
  imports: [BalanceCard],
  templateUrl: './balance.html',
  styleUrl: './balance.scss',
})
export class Balance {

  transactions = input.required<{ value: number, type: 'income' | 'outcome' }[]>();

  totalIncomes = computed(() => {
    return this.transactions()
    .filter(transaction => transaction.type === 'income')
    .reduce((total, transaction) => total + transaction.value, 0);
  });

  totalOutcomes = computed(() => {
    return this.transactions()
    .filter(transaction => transaction.type === 'outcome')
    .reduce((total, transaction) => total + transaction.value, 0);
  });

  balance = computed(() => {
    return this.totalIncomes() - this.totalOutcomes();
  });

}
