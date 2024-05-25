import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  // outputs
  @Output() deleteUser = new EventEmitter<string | number>();
  // properties
  protected deleting: boolean = false;
  protected inView: boolean = false;
  // delete the user
  protected delete = () => this.deleteUser.emit(this.user.id);
  // try to confirm user deletion
  protected tryDelete = () => (this.deleting = true);

  protected viewUser = () => (this.inView = true);
}
