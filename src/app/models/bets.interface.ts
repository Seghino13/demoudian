export interface BetSelection {
  id: string;
  name: string;
  price: number;
}

export interface BetMarket {
  id: string;
  name: string;
  selections: BetSelection[];
}

export interface BetEvent {
  id: string;
  name: string;
  markets: BetMarket[];
}
