import {Component, EventEmitter, OnInit, Output, TemplateRef} from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap';
import { BsModalService} from 'ngx-bootstrap';
import {Employee} from '../employee';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService} from '../employee.service';

@Component({
  selector: 'app-new-modal',
  templateUrl: './new-modal.component.html',
  styleUrls: ['./new-modal.component.css']
})
export class NewModalComponent implements OnInit {
  modalRef: BsModalRef;
  newEmployee: Employee;
  positions: Array<string> = [];
  states: Array<string> = [];
  @Output() notifyTable: EventEmitter<any> = new EventEmitter();
  newEmployeeForm = new FormGroup ({
    firstName: new FormControl(),
    dateHired: new FormControl(),
    lastName: new FormControl(),
    addressOne: new FormControl(),
    middleInt: new FormControl(),
    addressTwo: new FormControl(),
    email: new FormControl(),
    city: new FormControl(),
    phone: new FormControl(),
    state: new FormControl(),
    position: new FormControl(),
    zipCode: new FormControl(),
    active: new FormControl()
  });
  constructor(
    private modalService: BsModalService,
    private employeeService: EmployeeService
  ) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    this.newEmployee = new Employee();
  }
  ngOnInit() {
    this.initPositions();
    this.initStates();
  }
  onSubmit() {
    this.modalRef.hide();
    this.addEmployee();
    this.newEmployeeForm.reset();
  }
  cancel(): void {
    this.modalRef.hide();
  }
  addEmployee() {
    this.employeeService.addNewEmployee(this.newEmployee).subscribe(employee => this.newEmployee = employee,
      error => console.log('Error: ' + error),
      () => this.addEmployeeToTable());
  }
  addEmployeeToTable() {
    this.notifyTable.emit(this.newEmployee);
}
  initPositions() {
    this.positions = ['Indirect', 'Direct', 'Program Manager', 'Director', 'Executive'];
  }
  initStates() {
    this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  }
}

