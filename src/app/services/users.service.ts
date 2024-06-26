import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public constructor(private apiService: ApiService) {}

  public getAll = (): Observable<GetUsersContract> => {
    return this.apiService.get<GetUsersContract>(`users`);
  };

  public delete = async <T>(id: T): Promise<Observable<T>> => {
    console.log(id);
    return await this.apiService.delete(`users/${id}`);
  };
}
