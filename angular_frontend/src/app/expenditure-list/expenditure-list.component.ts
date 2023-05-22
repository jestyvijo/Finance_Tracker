import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ExpenseserviceService } from '../shared/service/expenseservice.service';
import { Expensemodel } from '../shared/models/expensemodel.model';
import * as $ from 'jquery'

declare var M: any;
@Component({
  selector: 'app-expenditure-list',
  templateUrl: './expenditure-list.component.html',
  styleUrls: ['./expenditure-list.component.css']
})
export class ExpenditureListComponent implements OnInit {

  constructor(public budget: ExpenseserviceService) {
   }

  ngOnInit(){
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.budget.selectedExpense = {
      _id: "",
      income: null,
      expense_budget:null,
      saving: null,
      investment: null,
      daily_expense: null,
      date:"",
      month: null
    }
  }

  onSubmit(form: NgForm) {
    this.budget.postdate(form.value).subscribe((res) => {
      this.budget.employees = res as Expensemodel[];
      alert(this.budget.employees[0].date)
    });
}

}
