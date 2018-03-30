import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap';
import { BsModalService} from 'ngx-bootstrap';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  @Input() id: string;
  employee: Employee;
  modalRef: BsModalRef;
  deleted: boolean;
  @Output() notifyTable: EventEmitter<any> = new EventEmitter();
  constructor(
    private modalService: BsModalService,
    private employeeService: EmployeeService,
  ) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
  }
  confirm(): void {
    this.deleteEmployee();
    this.deleted = true;
    window.location.reload();
    // this.updateTable();
  }
  decline(): void {
    this.modalRef.hide();
  }
  getEmployee(): void {
    this.employeeService.getEmployeeById(this.id).subscribe(employee => this.employee = employee);
  }
  deleteEmployee(): void {
    this.employeeService.deleteEmployeeById(this.id).subscribe();
  }
  ngOnInit() {
    this.getEmployee();
    this.deleted = false;
  }
  updateTable() {
    this.notifyTable.emit('update');
  }

}
