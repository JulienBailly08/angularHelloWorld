import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title:string ="Drive X";
  drivers: any;

  constructor(private data:DataService) { 

    this.drivers = data.getNbBestDrivers(3);

  }

  ngOnInit(): void {
  }

}
