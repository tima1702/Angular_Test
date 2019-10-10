import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import { AuthService } from '../auth/auth.service.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]);
  hide = true;

  signUpGroup = new FormGroup({
    email: this.email,
    password: this.password
  });


  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'You must enter a value' :
      this.password.hasError('maxlength') ? 'Max 20' :
        this.password.hasError('minlength') ? 'Min 6' : '';
  }


  onSubmit() {
    let isValid = true;
    [this.password, this.email].forEach(item => {
      if (item.status === 'INVALID') {
        isValid = false;
      }
    });

    if (isValid) {
      this.authService.login(this.email.value, this.password.value);
    }
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}


