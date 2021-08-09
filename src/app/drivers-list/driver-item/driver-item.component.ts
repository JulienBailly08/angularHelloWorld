import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-item',
  templateUrl: './driver-item.component.html',
  styleUrls: ['./driver-item.component.css']
})
export class DriverItemComponent implements OnInit {
  @Input() driver: any;
  
  //likeIts :number

  constructor() { }

  ngOnInit(): void {
  }

  onLike(){
    this.driver.likeIts=this.driver.likeIts+1;
  }

  onDislike(){
    this.driver.likeIts=this.driver.likeIts-1;
  }

}
