import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {SignUp} from '../models/sign-up.model';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {


  model = new SignUp('Test','Test','Test','Test');
  submitted  =false;

  onSubmit() {  }

  newSignUp() {
    this.model = new SignUp("","","","");
  }

  get diagnostic() { return JSON.stringify(this.model); }

  showFormControls(form:any){
  //  return form && form.controls.first_name && form.controls.first_name.value;
  }

  constructor() { }

  ngOnInit() {
    this.model ;
  }

}
