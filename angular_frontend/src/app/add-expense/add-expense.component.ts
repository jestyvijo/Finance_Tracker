import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ExpenseserviceService } from '../shared/service/expenseservice.service';
import { Expensemodel } from '../shared/models/expensemodel.model';

declare var M: any;
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css'],
  providers: [ExpenseserviceService]
})
export class AddExpenseComponent implements OnInit {
mm:any
showMsg: boolean = false;
  constructor(public budget: ExpenseserviceService,private route: ActivatedRoute) { }

  ngOnInit(){
    this.refreshList();
    this.resetForm1()
  }

  resetForm1(form?: NgForm) {
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

  refreshList() {
    this.mm=this.route.snapshot.paramMap.get('month');
    this.budget.getList().subscribe((res) => {
      this.budget.employees = res as Expensemodel[];
      this.budget.selectedExpense = {
        _id: this.budget.employees[0]._id,
        income: this.budget.employees[0].income,
        expense_budget:this.budget.employees[0].expense_budget,
        saving: this.budget.employees[0].saving,
        investment: this.budget.employees[0].investment,
        daily_expense: null,
        date:this.budget.employees[0].date,
        month: this.budget.employees[0].month
      }
    });
  }

  onSubmit(form: NgForm) {
    this.budget.putdailyExpense(form.value).subscribe((res) => {
      this.resetForm1(form);
      this.refreshList();
      this.showMsg= true;
    });
}
  

}
