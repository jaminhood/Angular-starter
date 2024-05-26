import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { Store } from '@ngrx/store';
import { setUser } from '../../../stste/user/user.actions';
import userFeature from '../../../stste/user/user.feature';

@Component({
  selector: 'view-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss',
})
export class ViewUserComponent {
  protected user$: UserContract | null = null;
  // constructor
  public constructor(private store: Store) {
    this.store
      .select(userFeature.selectActiveUser)
      .subscribe((user) => (this.user$ = user));
  }
  protected close = () => this.store.dispatch(setUser({ id: null }));
}
