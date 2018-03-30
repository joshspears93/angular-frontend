import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap';
import { BsModalService} from 'ngx-bootstrap';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {
  @Input() id: string;
  employee: Employee;
  modalRef: BsModalRef;
  message: string;
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
  update(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }
  cancel(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
  ngOnInit() {
    this.getEmployee();
  }

}
