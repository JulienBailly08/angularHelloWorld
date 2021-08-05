import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {
colorOne:string = "blue";

  constructor() { }
  onOff:boolean=true;
  marginPts:string="50px";

  ngOnInit(): void {
  }
  
  getCouleur(){
    return "red";
  }
  
  getBootstrap(){
    return "bg-primary text-center";
  }
  onSwitch(){
    if(this.onOff){
      this.onOff=false;
    }else {
      this.onOff=true;
    }
  }

}
