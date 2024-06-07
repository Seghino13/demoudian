import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  private state: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public event$: Observable<any> = this.state.asObservable();

  constructor() {}

  emitState(reload: boolean) {
    this.state.next(reload);
  }
}
