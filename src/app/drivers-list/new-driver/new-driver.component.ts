import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Driver } from 'src/app/models/Driver';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.css']
})
export class NewDriverComponent implements OnInit {

  test= new FormControl('');

  constructor(private data:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(myForm : NgForm) {

    const newDriver = new Driver(myForm.value['fullName'],myForm.value['pays'],myForm.value['coverImage'],myForm.value['category']);  

    this.data.addDriver(newDriver);

    this.router.navigate(['drivers']);    
  }

}
