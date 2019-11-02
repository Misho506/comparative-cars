import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComparativeComponent } from './components/comparative/comparative.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "compare", component: ComparativeComponent },
  { path: "car-detail", component: CarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
