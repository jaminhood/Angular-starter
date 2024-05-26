import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserCardComponent } from '../components/user-card/user-card.component';
import { loadUsers } from '../stste/user/user.actions';
import userFeature from '../stste/user/user.feature';
import { UsersService } from './../services/users.service';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule, UserCardComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  // properties
  protected users$: Observable<UserContract[]>;
  // constructor
  public constructor(private usersService: UsersService, private store: Store) {
    this.users$ = this.store.select(userFeature.selectUsers);
  }
  // delete a user
  protected deleteUser = ($event: string | number) =>
    this.usersService.delete($event).subscribe({
      next: () => this.getAllUsers(),
      error: (error) => console.error(error),
    });
  // get all available users
  protected getAllUsers = () => this.store.dispatch(loadUsers());
  // initialise component
  ngOnInit() {
    this.getAllUsers();
  }
}
