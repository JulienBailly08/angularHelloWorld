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

  test: any = this.bana.getFruit();

  constructor(  private bana: BananeService,
                private resto: RestaurantService) {
    bana.getFruit();
    console.log(resto.name);
  }

  ngOnInit(): void {
    this.test;
  }

}
