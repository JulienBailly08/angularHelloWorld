import { Component, OnInit } from '@angular/core';
import { BananeService } from '../services/banane.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title: string = "Drive X";

  test: string = this.bana.getFruit();

  prixVente:number = this.resto.getPrice();

  constructor(  private bana: BananeService,
                private resto: RestaurantService) {
    bana.getFruit();
    console.log(resto.name);
  }

  ngOnInit(): void {
    this.test;
  }

}
