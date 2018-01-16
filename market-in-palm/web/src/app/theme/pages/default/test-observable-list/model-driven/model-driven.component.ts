import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators  } from '@angular/forms';
@Component({
  selector: '.m-wrapper',
  templateUrl: './model-driven.component.html',
  styles: []
})
export class ModelDrivenComponent implements OnInit {

  myform:FormGroup;
  fname:FormControl;
  lname:FormControl;
  email:FormControl;
  pwd:FormControl;
  lang:FormControl;
  langs:string[]=['ENGLISH','FRENCH','GERMAN'];
  constructor() { }


  ngOnInit() {
    this.createFormsControl();
    this.createControls();
   }

    createFormsControl(){
      this.fname=new FormControl('',Validators.required);
      this.lname=new FormControl('',Validators.required);
      this.email=new FormControl('', [ 
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")]);
      this.pwd=new FormControl('', [
        Validators.minLength(8), 
        Validators.required
    ]);
    this.lang=new FormControl('');
  }
    createControls(){
      this.myform = new FormGroup({
        name: new FormGroup({
          fname: this.fname ,
          lname: this.lname,
        }),
        email: this.email,
        pwd: this.pwd,
        lang: this.lang
      });
    }
    onSubmit() {
      if (this.myform.valid) {
        console.log("Form Submitted!");
      }
    }
}
