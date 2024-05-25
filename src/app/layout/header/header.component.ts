import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateContract } from '../../stste/app.state';
import { counterFeature } from '../../stste/counter/counter.feature';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected count: Observable<number>;

  public constructor(private store: Store<AppStateContract>) {
    this.count = this.store.select(counterFeature.selectCount);
  }
}
