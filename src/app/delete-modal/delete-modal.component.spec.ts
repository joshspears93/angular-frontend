import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModalComponent } from './delete-modal.component';
import {BrowserModule} from '@angular/platform-browser';
import {EmployeeService} from '../employee.service';
import {BsDatepickerModule, BsDropdownModule, ModalModule} from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {SearchModalComponent} from '../search-modal/search-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UpdateModalComponent} from '../update-modal/update-modal.component';
import {NewModalComponent} from '../new-modal/new-modal.component';
import {EmployeesComponent} from '../employees/employees.component';


describe('DeleteModalComponent', () => {
  let component: DeleteModalComponent;
  let fixture: ComponentFixture<DeleteModalComponent>;

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
    fixture = TestBed.createComponent(DeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create delete component', () => {
    expect(component).toBeTruthy();
  });
  afterEach(function () {
    fixture.destroy();
  });
});
