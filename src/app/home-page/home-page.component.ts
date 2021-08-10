import { Component, OnInit } from '@angular/core';
import { BananeService } from '../services/banane.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title:string ="Drive X";

  test:any= this.bana.getFruit(); 

  constructor(private bana:BananeService) { 
    this.bana.getFruit();
  }

  ngOnInit(): void {
    this.test;
  }

}
