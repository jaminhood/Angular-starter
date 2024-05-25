import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  public constructor(private apiService: ApiService) {}

  public getCategories = (): Observable<Category[]> => {
    return this.apiService.get(`categories`);
  };
}
