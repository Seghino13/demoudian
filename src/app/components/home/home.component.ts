import { Component, OnInit } from '@angular/core';
import { BetEvent, BetSelection } from 'src/app/models/bets.interface';
import { BetsService } from 'src/app/services/bets/bets.service';
import { StatesService } from 'src/app/services/events/states.service';
import { BetsHelperService } from 'src/app/services/helpers/bets-helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  winner?: BetSelection;
  events: BetEvent[] = [];

  constructor(
    private betsService: BetsService,
    private betsHelperService: BetsHelperService,
    private statesService: StatesService,
  ) {}

  ngOnInit() {
    this.statesService.event$.subscribe((state) => {
      if (state) {
        this.getCurrentBet();
        this.getBets();
      }
    });

    this.getCurrentBet();
    this.getBets();
  }

  getBets() {
    this.betsService.getBets().subscribe((response) => {
      this.events = response;
    });
  }

  getCurrentBet() {
    this.winner = JSON.parse(this.betsHelperService.getSelection() as string);
  }

  addBet(selection: BetSelection) {
    this.betsHelperService.addSelection(selection);
    this.statesService.emitState(true);
  }
}
