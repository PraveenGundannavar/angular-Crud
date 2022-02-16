import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  UserDatailsForm: FormGroup;
  userDetailsData = [];
  addressData: FormArray;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.UserDatailsForm = this.formBuilder.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
      addressData: this.formBuilder.array([this.createAddressData()]),
    });
  }

  onSubmit() {
    console.log(this.UserDatailsForm.value);
    this.UserDatailsForm.value.id = this.userDetailsData.length + 1;
    this.userDetailsData.push(this.UserDatailsForm.value);
    this.UserDatailsForm.reset();
  }
  createAddressData() {
    return this.formBuilder.group({
      address: [''],
      phoneNumber: [''],
    });
  }
}
