import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BetEvent } from '../../models/bets.interface';

@Injectable({
  providedIn: 'root',
})
export class BetsService {
  private apiLocalUrl: string = 'assets/data/data.json';
  constructor(private http: HttpClient) {}

  getBets() {
    return this.http.get<BetEvent[]>(this.apiLocalUrl);
  }
}
