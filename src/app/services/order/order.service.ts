import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ORDERS_CREATE_URL, ORDERS_CURRENT_USER_URL, ORDERS_PAY_URL } from 'src/app/shared/constants/urls';
import { Order } from 'src/app/shared/models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(
    private httpClient: HttpClient
  ) { }

  create(order: Order){
    return this.httpClient.post<Order>(ORDERS_CREATE_URL, order);
  }

  getNewOrderForCurrentUser(): Observable<Order>{
    return this.httpClient.get<Order>(ORDERS_CURRENT_USER_URL);
  }

  pay(order: Order): Observable<string>{
    return this.httpClient.post<string>(ORDERS_PAY_URL, order);
  }
}
