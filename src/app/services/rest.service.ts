import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private BASE_URL = 'http://localhost:8080/customers';

  constructor(private httpClient: HttpClient) {}

  public getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.BASE_URL);
  }
}
