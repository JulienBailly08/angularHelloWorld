import { Injectable } from '@angular/core';
import { BananeService } from './banane.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  name:string ="Le bistrot cool";
  prixRestaurant:number | undefined;

  constructor(private banana:BananeService) { }

  getPrice(){
    return this.prixRestaurant = this.banana.prix * 1.4
  }
}
