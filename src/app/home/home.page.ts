import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public regular_pay: number = 0;
  public overtime_pay: number = 0;
  public total_pay: number = 0;
  public tax: number = 0;


  constructor() { }

  ngOnInit() {
  }

  public async calculatePay(no_of_hours: number, hourly_rate: number){
    if (no_of_hours <= 40) {
      this.regular_pay = no_of_hours*hourly_rate;
    } else {
      this.regular_pay = 40*hourly_rate;
      this.overtime_pay = (no_of_hours-40)*hourly_rate*1.5;
    }
    this.total_pay = this.regular_pay + this.overtime_pay;
    this.tax = this.regular_pay + this.overtime_pay * 0.18;

    console.log("regular_pay:${ this.regular_pay }");
    console.log("overtime_pay:${ this.overtime_pay }");
    console.log("total_pay:${ this.total_pay }");

  }

}
