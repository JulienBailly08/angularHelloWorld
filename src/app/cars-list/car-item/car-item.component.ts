import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {
  @Input() car: any;
  bookingMessage:string=""
  isReserved: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  reserveOnClick() {
    this.isReserved = true;
    this.bookingMessage ="Réservation prise en compte"  
  }
}
