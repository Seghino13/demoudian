import { Injectable } from '@angular/core';
import { TypeBet } from 'src/app/enums/type-bet.enum';
import { BetSelection } from 'src/app/models/bets.interface';

@Injectable({
  providedIn: 'root',
})
export class BetsHelperService {
  constructor() {}

  addSelection(selection: BetSelection) {
    const currentBet = this.getSelection();

    if (!currentBet) {
      this.saveSelection(selection);
      return;
    }
    this.clearSelecion();
    this.saveSelection(selection);
  }

  getSelection() {
    return localStorage.getItem(TypeBet.GET_LOCAL);
  }

  saveSelection(selection: BetSelection) {
    localStorage.setItem(TypeBet.GET_LOCAL, JSON.stringify(selection));
  }

  clearSelecion() {
    localStorage.clear();
  }
}
