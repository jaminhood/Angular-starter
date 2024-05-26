import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteUser, setUser } from '../../stste/user/user.actions';
import userFeature from '../../stste/user/user.feature';
import { ConfirmUserDeleteComponent } from './confirm-user-delete/confirm-user-delete.component';
import { ViewUserComponent } from './view-user/view-user.component';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [CommonModule, ConfirmUserDeleteComponent, ViewUserComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  // inputs
  @Input() user!: UserContract;
  // properties
  protected deleting: boolean = false;
  protected inView: boolean = false;
  protected currentUserId: string | number | undefined;
  // constructor
  public constructor(private store: Store) {
    this.store
      .select(userFeature.selectCurrentUserId)
      .subscribe((id) => (this.currentUserId = id));
  }
  // delete the user
  protected delete = () =>
    this.store.dispatch(deleteUser({ id: this.user.id }));
  // try to confirm user deletion
  protected tryDelete = () => (this.deleting = true);

  protected viewUser = () => this.store.dispatch(setUser({ id: this.user.id }));
}
