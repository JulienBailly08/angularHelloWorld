import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  colorOne:string ="blue";
  onOff:boolean=true;

product:any = {
  label: "iphone 12",
  price: 15000000,
  stock: 3
}


  constructor() { }

  ngOnInit(): void {
  }



  onSwitch(){
    if(this.onOff){
      this.onOff = false;
    }
    else{
      this.onOff=true;
    }
  }

}
