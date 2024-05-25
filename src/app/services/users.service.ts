import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public constructor(private apiService: ApiService) {}

  public getAll = (): Observable<GetUsersContract> => {
    return this.apiService.get(`users`);
  };

  public delete = (id: string | number): Observable<any> => {
    return this.apiService.delete(`users/${id}`);
  };
}
