import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURI: string = 'http://127.0.0.1:8000/api/v1/';

  public constructor(private httpClient: HttpClient) {}

  public get<T>(url: string): Observable<T> {
    return this.httpClient.get(`${this.baseURI}${url}`) as Observable<T>;
  }

  public delete<T>(url: string): Observable<T> {
    return this.httpClient.delete(`${this.baseURI}${url}`) as Observable<T>;
  }
}
