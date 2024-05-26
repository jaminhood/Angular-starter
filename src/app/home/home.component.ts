import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserCardComponent } from '../components/user-card/user-card.component';
import { loadUsers } from '../stste/user/user.actions';
import userFeature from '../stste/user/user.feature';

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
  public constructor(private store: Store) {
    this.users$ = this.store.select(userFeature.selectUsers);
  }
  // get all available users
  protected getAllUsers = () => this.store.dispatch(loadUsers());
  // initialise component
  ngOnInit() {
    this.getAllUsers();
  }
}
