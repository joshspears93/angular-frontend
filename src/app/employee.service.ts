import { Injectable } from '@angular/core';
import { Employee} from './employee';
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable()
export class EmployeeService {
  private employeeUrl = 'http://localhost:8080/api/employees';
  constructor(
    private http: HttpClient
  ) { }
  getEmployees(): Observable<Employee[]> {
    // return this.http.get<Employee[]>(this.employeeUrl).pipe(catchError(this.handleError('getEmployees', [])));
    return this.http.get<Employee[]>(this.employeeUrl, httpOptions);
  }
  getEmployeeById(id: string): Observable<Employee> {
    // this.http.get(this.employeeUrl + '/' + id).subscribe(data => {
    //   console.log(data);
    // });
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
  private handleError(error: HttpErrorResponse) {
    console.log(error);
  }
}
