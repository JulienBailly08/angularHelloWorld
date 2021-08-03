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
  onClickButton(){
    alert("Click detecté !!");
  }

  onSurvol(){
    console.log("survol de la zone")
  }

  onLeave(){
    alert("zone quitée");
  }

  onClickButton2(inputValue:string){
    console.log(inputValue);
  }
}
