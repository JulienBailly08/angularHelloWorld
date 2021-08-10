import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  drivers: any; 

  constructor(private data:DataService) { 
    this.drivers = data.getAllDrivers();
  }

  ngOnInit(): void {
  }

}
