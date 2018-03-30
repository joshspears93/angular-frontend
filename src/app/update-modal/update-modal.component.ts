import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap';
import { BsModalService} from 'ngx-bootstrap';
import {Employee} from '../employee';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {
  @Input() employee: Employee;
  employeeCopy: Employee;
  // firstName: string;
  modalRef: BsModalRef;
  message: string;
  constructor(private modalService: BsModalService) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }
  update(): void {
    this.message = 'Confirmed!';
    // this.employee = this.employeeCopy;
    this.modalRef.hide();
  }
  cancel(): void {
    this.message = 'Declined!';
    // this.employeeCopy = this.employee;
    this.modalRef.hide();
  }
  ngOnInit() {
    this.employeeCopy = Object.create(this.employee);
    // this.firstName = this.employee.firstName;
  }

}
