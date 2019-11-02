import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comparative',
  templateUrl: './comparative.component.html',
  styleUrls: ['./comparative.component.scss']
})
export class ComparativeComponent implements OnInit {
  public cars: Object;

  constructor(
    private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("selectedCars")) {
      this.cars = JSON.parse(localStorage.getItem("selectedCars"));
    }
    console.log(this.cars);
  }

  goBack() {
    this.router.navigate([""]);
  }

}
