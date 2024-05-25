import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { UserCardComponent } from '../components/user-card/user-card.component';
import { UsersService } from './../services/users.service';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  // properties
  protected users: UserContract[] | [] = [];
  // constructor
  public constructor(private usersService: UsersService) {}
  // delete a user
  protected deleteUser = ($event: string | number) =>
    this.usersService.delete($event).subscribe({
      next: () => this.getAllUsers(),
      error: (error) => console.error(error),
    });
  // get all available users
  protected getAllUsers = () =>
    this.usersService.getAll().subscribe({
      next: (data) => (this.users = data.data),
      error: (error) => console.error(error),
    });
  // initialise component
  ngOnInit() {
    this.getAllUsers();
  }
}
