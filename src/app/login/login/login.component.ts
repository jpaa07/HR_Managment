import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(private fr: FormBuilder, private _route: Router, private _auth: AuthenticationService) {
    this.form = this.fr.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit() {
  }

  onSubmit() {
    this._auth.username = this.form.get('username').value;
    this._auth.password = this.form.get('password').value;
    this._route.navigate(['employees']);
  }
}
