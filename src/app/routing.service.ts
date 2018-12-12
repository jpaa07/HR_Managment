import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private _route: Router) { }

  gotoEmployees() {
    this._route.navigate(['employees']);
  }

  goToProjects() {
    this._route.navigate(['projects']);
  }

  goToLogin() {
    this._route.navigate(['login']);
  }
}
