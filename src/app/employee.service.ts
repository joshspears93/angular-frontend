import { Injectable } from '@angular/core';
import { Employee} from './employee';
import { Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable()
export class EmployeeService {
  employeeUrl = 'http://localhost:8080/api/employees';
  constructor(
    private http: HttpClient
  ) { }
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl, httpOptions);
  }
  getEmployeeById(id: string): Observable<Employee> {
    const url = this.employeeUrl + '/' + id;
    return this.http.get<Employee>(url, httpOptions);
  }
  deleteEmployeeById(id: string): Observable<any> {
    const url = this.employeeUrl + '/' + id;
    return this.http.delete(url, httpOptions);
  }
  addNewEmployee(newEmployee: Employee): Observable<any> {
    return this.http.post(this.employeeUrl, newEmployee, httpOptions);
  }
  updateEmployee(updatedEmployee: Employee): Observable<any> {
    const url = this.employeeUrl + '/' + updatedEmployee.id;
    return this.http.put(url, updatedEmployee, httpOptions);

  }
  findEmployees(lastName: string): Observable<any> {
    const url = this.employeeUrl + '/search/' + lastName;
    return this.http.get(url, httpOptions);
  }
}
