import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  enfantUn:any = { name: "Mercedes AMG", price: 42000 };
  enfantDeux:any = { name: "Range Rover Evoque", price: 55000 };
  enfantTrois:any = { name: "Ferrari F50", price: 35000 };

  constructor() { }

  ngOnInit(): void {
  }

}
