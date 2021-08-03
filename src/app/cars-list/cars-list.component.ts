import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  enfantUn:string="premier truc";
  enfantDeux:string="deuxième truc";
  enfantTrois:string="troisième truc";

  constructor() { }

  ngOnInit(): void {
  }

}
