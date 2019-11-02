import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  public car: Object;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {
      this.car = params;
    });
  }

  goBack() {
    this.router.navigate([""]);
  }

}
