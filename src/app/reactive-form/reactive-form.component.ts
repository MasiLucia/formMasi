import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.nameField!.valueChanges
    .subscribe(value => {
      console.log(value);
    });
    this.form.valueChanges
    .subscribe(value => {
      console.log(value);
    });
  }

  getNameValue() {
    console.log(this.nameField!.value);
  }

  save() {
    if (this.form.valid){
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^([Aa-zA-ZáéíóúÁÉÍÓÚÑñ]{2,}\s?){2,4}$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      date: [''],
      age: [18, [Validators.required, Validators.min(18), Validators.max(100)]],
      agree: [false, [Validators.requiredTrue]],
    });
  }


  get nameField() {
    return this.form.get('name');
  }

  get isNameFieldValid() {
    return this.nameField!.touched && this.nameField!.valid;
  }

  get isNameFieldInvalid() {
    return this.nameField!.touched && this.nameField!.invalid;
  }

  get emailField() {
    return this.form.get('email');
  }

  get phoneField() {
    return this.form.get('phone');
  }

  get colorField() {
    return this.form.get('color');
  }

  get dateField() {
    return this.form.get('date');
  }

  get ageField() {
    return this.form.get('age');
  }

  get categoryField() {
    return this.form.get('category');
  }

  get tagField() {
    return this.form.get('tag');
  }

  get agreeField() {
    return this.form.get('agree');
  }

  get genderField() {
    return this.form.get('gender');
  }

  get zoneField() {
    return this.form.get('zone');
  }

}







