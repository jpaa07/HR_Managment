import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  router: Router;

  constructor(private fr: FormBuilder) {
    this.form = this.fr.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['dashboard'])
  }
}
