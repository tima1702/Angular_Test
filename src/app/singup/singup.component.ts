import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})

export class SingupComponent implements OnInit {
  constructor(private authService: AuthService) {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [Validators.required, Validators.maxLength(15)]);
  lastName = new FormControl('', [Validators.required, Validators.maxLength(15)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]);
  hide = true;

  signInGroup = new FormGroup({
    email: this.email,
    firstName: this.firstName,
    lastName: this.firstName,
    password: this.password
  });

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageFirstName() {
    return this.firstName.hasError('required') ? 'You must enter a value' :
      this.firstName.hasError('maxlength') ? 'Max 12' : '';
  }

  getErrorMessageLastName() {
    return this.lastName.hasError('required') ? 'You must enter a value' :
      this.lastName.hasError('maxlength') ? 'Max 12' : '';
  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'You must enter a value' :
      this.password.hasError('maxlength') ? 'Max 20' :
        this.password.hasError('minlength') ? 'Min 6' : '';
  }

  onSubmit() {
    let isValid = true;
    [this.lastName, this.firstName, this.password, this.email].forEach(item => {
      if (item.status === 'INVALID') {
        isValid = false;
      }
    });

    if (isValid) {
      this.authService.createUser(this.firstName.value, this.lastName.value, this.email.value, this.password.value);
    }
  }

  ngOnInit() {

  }
}

