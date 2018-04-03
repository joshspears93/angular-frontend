import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewModalComponent } from './new-modal.component';
import {BrowserModule} from '@angular/platform-browser';
import {EmployeeService} from '../employee.service';
import {DeleteModalComponent} from '../delete-modal/delete-modal.component';
import {BsDatepickerModule, BsDropdownModule, ModalModule} from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {SearchModalComponent} from '../search-modal/search-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UpdateModalComponent} from '../update-modal/update-modal.component';
import {EmployeesComponent} from '../employees/employees.component';

describe('NewModalComponent', () => {
  let component: NewModalComponent;
  let fixture: ComponentFixture<NewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EmployeesComponent,
        NewModalComponent,
        UpdateModalComponent,
        DeleteModalComponent,
        SearchModalComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        HttpClientModule,
        BsDropdownModule.forRoot(),
        BsDatepickerModule.forRoot()
      ],
      providers: [
        EmployeeService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create new modal', () => {
    expect(component).toBeTruthy();
  });
  afterEach(function () {
  });
});
