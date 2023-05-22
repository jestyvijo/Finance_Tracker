import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ExpenseserviceService } from '../shared/service/expenseservice.service';
import { Expensemodel } from '../shared/models/expensemodel.model';

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.css']
})
export class ViewExpenseComponent implements OnInit {
  mm:any
  constructor(public budget: ExpenseserviceService,private route: ActivatedRoute) {
   }

  ngOnInit(){
    this.refreshList();
  }

  refreshList() {
    this.mm=this.route.snapshot.paramMap.get('month');
    this.budget.getList().subscribe((res) => {
      this.budget.employees = res as Expensemodel[];
    });
  }

}
