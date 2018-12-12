import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements InMemoryDbService {

  createDb() {
    const employees = [
      {
        id: 1,
        name: 'Jorge Mario Hurtado',
        company: 'Yuxi Global',
        age: 38,
        birthday: '1993-09-07',
        favoriteColor: 'Green',
        project: 1,
      },
      {
        id: 2,
        name: 'Pablo Diaz',
        company: 'Yuxi Global',
        age: 39,
        birthday: '1993-09-07',
        favoriteColor: 'Blue',
        project: 1,
      },
      {
        id: 3,
        name: 'Roger Alvarez',
        company: 'Yuxi Global',
        age: 30,
        birthday: '1993-09-07',
        favoriteColor: 'Red',
        project: 1, 
      },
      {
        id: 4,
        name: 'Carlos Carrero',
        company: 'Yuxi Global',
        age: 37,
        birthday: '1993-09-07',
        favoriteColor: 'Gray',
        project: 2,
      },
      {
        id: 5,
        name: 'Santiago Arango',
        company: 'Yuxi Global',
        age: 26,
        birthday: '1993-09-07',
        favoriteColor: 'Brown',
        project: 2,
      },
      {
        id: 6,
        name: 'Harvin Bejarano',
        company: 'Yuxi Global',
        age: 37,
        birthday: '1993-09-07',
        favoriteColor: 'Black',
        project: 3,
      },
      {
        id: 7,
        name: 'Jorge Serrano',
        company: 'Yuxi Global',
        age: 44,
        birthday: '1993-09-07',
        favoriteColor: 'Red',
        project: 3,
      },
      {
        id: 8,
        name: 'Rachel Quimby',
        company: 'Yuxi Global',
        age: 25,
        birthday: '1993-09-07',
        favoriteColor: 'Yellow',
        project: 6,
      },
    ];
    const projects = [
      {
        id: 1,
        name: 'TopGun',
        teamSize: 3,
        clientName: 'Brainshark',
      },
      {
        id: 2,
        name: 'Rango',
        teamSize: 2,
        clientName: 'Brainshark',
      },
      {
        id: 3,
        name: 'Tron',
        teamSize: 2,
        clientName: 'Brainshark',
      },
      {
        id: 4,
        name: 'MadMax',
        teamSize: 0,
        clientName: 'Brainshark',
      },
      {
        id: 5,
        name: 'Die Hard',
        teamSize: 0,
        clientName: 'Brainshark',
      },
      {
        id: 6,
        name: 'Fury',
        teamSize: 1,
        clientName: 'Brainshark',
      },
    ];
    return { employees, projects };
  }
}
