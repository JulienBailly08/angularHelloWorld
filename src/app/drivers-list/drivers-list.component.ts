import { Component, OnInit } from '@angular/core';
import { Driver } from '../models/Driver';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  drivers!: Driver[]; 

  constructor(private data:DataService) {  
  }

  ngOnInit(): void {
    this.drivers = this.data.getAllDrivers();
  }

}
