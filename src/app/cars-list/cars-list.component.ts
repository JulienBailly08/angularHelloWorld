import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  mardiMatin: any = "Ils ont l'air ruinés";
  age: number = 13;
  game: any = {
    title: "bF BC2",
    support: "PC of course",
    multi: 128
  };

  getStock() {
    return 236;
  }

  monImage = "assets/img/image.jpg";

  getWakeUp() {
    console.log('ta race');
  }

  constructor() {
    this.getWakeUp();
  }

  ngOnInit(): void {


  }

}
