import {Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap';
import { BsModalService} from 'ngx-bootstrap';
import {Employee} from '../employee';

@Component({
  selector: 'app-new-modal',
  templateUrl: './new-modal.component.html',
  styleUrls: ['./new-modal.component.css']
})
export class NewModalComponent implements OnInit {
  modalRef: BsModalRef;
  message: string;
  constructor(private modalService: BsModalService) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
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

