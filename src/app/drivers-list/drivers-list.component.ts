import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isOnline:boolean = true;
  book:any ={
    title:'le secret des croisades',
    author:'On sais plus',
    price: null
  }

}
