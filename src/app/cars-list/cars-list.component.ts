import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  carUpdate: any;


  cars: any = [
    {
      name: "pagani huayra",
      pays: "italie",
      power: 765,
      perf: 3.2
    },
    {
      name: "koenigsegg agera rs",
      pays: "suéde",
      power: 1383,
      perf: 2.6
    },
    {
      name: "zenvo tsr s",
      pays: "danemark",
      power: 1200,
      perf: 2.8
    }
  ]



  constructor() { }

  ngOnInit(): void {
    this.carUpdate = new Date();
  }

}
