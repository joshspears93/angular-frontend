import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }
  public removeEmployeeFromTable(inputID: string): void {
    // Log ID to remove to console
    for (let i = this.employees.length - 1; i >= 0; --i) {
      if (this.employees[i].id === inputID) {
        this.employees.splice(i, 1);
      }
    }
  }
  public addEmployeeToTable(newEmployee: Employee): void {
    console.log(newEmployee);
    this.employees.push(newEmployee);
  }

}
