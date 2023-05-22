import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIncomeComponent } from './add-income/add-income.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ViewExpenseComponent } from './view-expense/view-expense.component';
import { ExpenditureListComponent } from './expenditure-list/expenditure-list.component';

const routes: Routes = [
  {path:"addincome",component:AddIncomeComponent},
  {path:"addexpense/:month",component:AddExpenseComponent},
  {path:"",component:ViewExpenseComponent},
  {path:"expenditurelist",component:ExpenditureListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
