import { Component, OnInit } from '@angular/core';
import CARLIST from "../../../constant/cars";
import { Car } from "../../models/car";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public carList: Array<Car> = CARLIST;
  public searchInput: String;
  public selectedCars: Array<Car> = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.sorfAphabetically();
  }

  sorfAphabetically() {
    this.carList = this.carList.sort(
      function(firstCar, secondCar) {
        if(firstCar.brand < secondCar.brand) 
          return -1;
        if(firstCar.brand > secondCar.brand)
          return 1;
        return 0;
      }
    );
  };

  searchCar(value: string) {
    if(value) {
      this.carList = this.carList.filter(
        function(car) {
          return car.brand.toLowerCase().includes(value.toLowerCase());
        });
    } else {
      this.carList = CARLIST;
    };
  };

  goToDetailCar(car: Car) {
    this.router.navigate(["/car-detail"], { queryParams: car });
  };

  selectCar(car: Car) {
    if(this.checkCar(car)) {
      this.selectedCars.forEach((selectedCar, index) => {
        if (selectedCar.model === car.model) {
          this.selectedCars.splice(index, 1);
        }
      });
    } else {
      this.selectedCars.push(car);
    }
  }

  compareCars() {
    if (this.selectedCars.length > 1 ) {
      localStorage.setItem("selectedCars", JSON.stringify(this.selectedCars));
      this.router.navigate(["/compare"]);
    } else if ( this.selectedCars.length > 3 ) {
      alert("No se pueden comparar más de 3 vehículos");
    };
  };

  checkCar(car: Car) {
    return this.selectedCars.some(selectedCar => {
      return selectedCar.model === car.model;
    });
  };

}
