import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Driver } from 'src/app/models/Driver';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.css']
})
export class NewDriverComponent implements OnInit {

  driverForm!: FormGroup;
  categories:any;
 
  constructor(private data:DataService, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.categories=this.data.getCategories();
  }

  createForm(){
    this.driverForm= this.formBuilder.group({
      fullName:['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      pays: ['',[Validators.required, Validators.minLength(2)]],
      coverImage:['', Validators.required],
      category:['', Validators.required]
    })
  }
  onSubmit(){
    const formValue = this.driverForm.value;
    const driver = new Driver(
      formValue['fullName'],
      formValue['pays'],
      formValue['coverImage'],
      formValue['category']
    )
    this.data.addDriver(driver);
    this.router.navigate(['drivers']);
  }
  
    
}
