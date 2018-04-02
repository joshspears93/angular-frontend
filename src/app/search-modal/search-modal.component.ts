import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap';
import { BsModalService} from 'ngx-bootstrap';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.css']
})
export class SearchModalComponent implements OnInit {
  @Input() name: string;
  employees: Employee[];
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private employeeService: EmployeeService
  ) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    this.findEmployees();
  }
  exit(): void {
    this.modalRef.hide();
    this.employees = [];
  }
  findEmployees(): void {
    this.employeeService.findEmployees(this.name).subscribe(employees => this.employees = employees,
      error => console.log('Error: ' + error));
  }
  ngOnInit() {
  }


}
