import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap';
import { BsModalService} from 'ngx-bootstrap';
import {Employee} from '../employee';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  @Input() employee: Employee;
  modalRef: BsModalRef;
  message: string;
  constructor(private modalService: BsModalService) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
  }
  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
  ngOnInit() {
  }

}
