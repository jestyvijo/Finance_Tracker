import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
dd:any
mm:any
today1:any
month:any
  constructor() {
    var today = new Date();
        var dd = today.getDate();
        this.month = today.getMonth();
        var mm = today.getMonth() + 1;
  
        var yyyy = today.getFullYear();
        if (dd < 10) {
            this.dd = '0' + dd;
        }
        if (mm < 10) {
            this.mm = '0' + mm;
        }
        this.today1 = dd + '/' + mm + '/' + yyyy;
  
   }

  ngOnInit(){
  }

}
