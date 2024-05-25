import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'confirm-user-delete',
  standalone: true,
  imports: [],
  templateUrl: './confirm-user-delete.component.html',
  styleUrl: './confirm-user-delete.component.scss',
})
export class ConfirmUserDeleteComponent {
  // inputs
  @Input() deleting?: boolean;
  @Input() user!: UserContract;
  // outputs
  @Output() confirmed = new EventEmitter<boolean>();
  @Output() deletingChange = new EventEmitter<boolean>();
  // cancel user deletion
  protected cancel = () => this.deletingChange.emit(false);
  // confirm user deletion
  protected confirmDelete = () => this.confirmed.emit(true);
}
