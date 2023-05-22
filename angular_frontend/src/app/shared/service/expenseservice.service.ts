import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Expensemodel } from '../models/expensemodel.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseserviceService {
  selectedExpense: Expensemodel;
  employees: Expensemodel[];
  readonly baseURL = 'http://localhost:8080';

  constructor(public http: HttpClient) { }

  postExpense(emp:Expensemodel ) {
    return this.http.post(this.baseURL, emp);
  }

  getList() {
    return this.http.get(this.baseURL);
  }

  putdailyExpense(emp:Expensemodel){
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }
  postdate(emp:Expensemodel){
    alert(emp.date)
    return this.http.get(this.baseURL+`/${emp.date}`);
  }
}
