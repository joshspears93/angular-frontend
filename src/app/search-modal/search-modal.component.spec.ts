import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchModalComponent } from './search-modal.component';
import {BrowserModule} from '@angular/platform-browser';
import {EmployeeService} from '../employee.service';
import {DeleteModalComponent} from '../delete-modal/delete-modal.component';
import {BsDatepickerModule, BsDropdownModule, ModalModule} from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UpdateModalComponent} from '../update-modal/update-modal.component';
import {NewModalComponent} from '../new-modal/new-modal.component';
import {EmployeesComponent} from '../employees/employees.component';

describe('SearchModalComponent', () => {
  let component: SearchModalComponent;
  let fixture: ComponentFixture<SearchModalComponent>;

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
    fixture = TestBed.createComponent(SearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create search modal', () => {
    expect(component).toBeTruthy();
  });
});
