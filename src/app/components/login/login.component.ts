import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm = new FormGroup({
    user: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  constructor(private router: Router) { }

  login() {

    if (this.loginForm.invalid) {
      return;
    }

    const userDataString = JSON.stringify(this.loginForm.value);

    localStorage.setItem("current-user", userDataString);

    this.router.navigate(["/auth"]);
  }

}
