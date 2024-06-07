import { Component } from '@angular/core';
import { BetSelection } from 'src/app/models/bets.interface';
import { StatesService } from 'src/app/services/events/states.service';
import { BetsHelperService } from 'src/app/services/helpers/bets-helper.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  winner?: BetSelection;

  constructor(
    private helper: BetsHelperService,
    private statesService: StatesService,
  ) {
    this.statesService.event$.subscribe((state) => {
      if (state) {
        this.getCurrentBet();
      }
    });
    this.getCurrentBet();
  }

  getCurrentBet() {
    this.winner = JSON.parse(this.helper.getSelection() as string);
  }

  emptyCart() {
    this.helper.clearSelecion();
    this.statesService.emitState(true);
  }
}
