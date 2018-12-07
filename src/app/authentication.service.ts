import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  validateAuth(username: string, password: string) {
    return (username === '' && password === '');
  }
}
