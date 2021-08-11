import { Component, Input,OnInit } from '@angular/core';
import { Driver } from 'src/app/models/Driver';

@Component({
  selector: 'app-driver-item',
  templateUrl: './driver-item.component.html',
  styleUrls: ['./driver-item.component.css']
})
export class DriverItemComponent implements OnInit {
  @Input() driver!: Driver;
  

  constructor() { }

  ngOnInit(): void {
  }

  onLike(){
    this.driver.likeIts++;
  }

  onDislike(){
    this.driver.likeIts--;
  }

}
