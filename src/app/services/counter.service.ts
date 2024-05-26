import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private count: number = 0;

  constructor() {}

  public increament(): Observable<any> {
    this.count += 1;
    return this.count;
  }

  public async decreament(): Promise<number> {
    this.count -= 1;
    return await this.count;
  }
}
