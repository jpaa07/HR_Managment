import { Injectable } from '@angular/core';
import { Employees } from './employees/employees.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {


  url = 'app/employees';

  constructor(private http: HttpClient) { }

   getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.url);
  }

  createEmployee(employee: Employees) {
    this.http.post<Employees>(this.url, employee).subscribe();
  }

  updateEmployee(employee) {
    this.http.put(`${this.url}/${employee.id}`, employee).subscribe();
  }

  deleteEmployee(employeeId: number) {
    this.http.delete(`${this.url}/${employeeId}`).subscribe();
  }
}
