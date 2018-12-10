import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  url = 'app/employees'
  employees = this.http.get(this.url).subscribe(console.log);

  ngOnInit() {
  }

}
