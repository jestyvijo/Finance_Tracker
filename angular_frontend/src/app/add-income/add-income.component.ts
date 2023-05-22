import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ExpenseserviceService } from '../shared/service/expenseservice.service';
import { Expensemodel } from '../shared/models/expensemodel.model';

declare var M: any;
@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css'],
  providers: [ExpenseserviceService]
})
export class AddIncomeComponent implements OnInit {
  showMsg: boolean = false;
  constructor(public budget: ExpenseserviceService) { }

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
      this.budget.postExpense(form.value).subscribe((res) => {
        this.resetForm(form);
        this.showMsg= true;
      });
  }

}
