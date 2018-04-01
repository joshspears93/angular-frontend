import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap';
import { BsModalService} from 'ngx-bootstrap';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {
  @Input() id: string;
  employee: Employee;
  modalRef: BsModalRef;
  positions: Array<string> = [];
  states: Array<string> = [];
  updatedEmployeeForm = new FormGroup ({
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
  @Output() notifyTable: EventEmitter<any> = new EventEmitter();
  constructor(
    private modalService: BsModalService,
    private employeeService: EmployeeService
  ) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    this.getEmployee();
  }
  getEmployee(): void {
    this.employeeService.getEmployeeById(this.id).subscribe(employee => this.employee = employee);
    // console.log(this.employee);
  }
  onSubmit(): void {
    this.modalRef.hide();
    this.updateEmployee();
  }
  cancel(): void {
    this.modalRef.hide();
  }
  ngOnInit() {
    this.getEmployee();
    this.initPositions();
    this.initStates();
  }
  updateEmployee() {
    this.employeeService.updateEmployee(this.employee).subscribe(employee => this.employee = employee,
      error => console.log('Error: ' + error),
      () => this.updateEmployeeInTable());
  }
  updateEmployeeInTable() {
    this.notifyTable.emit(this.employee);
  }
  initPositions() {
    this.positions = ['Indirect', 'Direct', 'Program Manager', 'Director', 'Executive'];
  }
  initStates() {
    this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  }
}
