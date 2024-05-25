import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'view-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss',
})
export class ViewUserComponent {
  // inputs
  @Input() inView?: boolean;
  @Input() user!: UserContract;
  // output
  @Output() inViewChange = new EventEmitter<boolean>();
  // cancel user deletion
  protected close = () => this.inViewChange.emit(false);
}
