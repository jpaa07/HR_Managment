import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private _auth: AuthenticationService) {

  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this._auth.validateAuth();
  }
}
