import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BrowserModule, By} from '@angular/platform-browser';
import {EmployeesComponent} from './employees/employees.component';
import {NewModalComponent} from './new-modal/new-modal.component';
import {UpdateModalComponent} from './update-modal/update-modal.component';
import {DeleteModalComponent} from './delete-modal/delete-modal.component';
import {SearchModalComponent} from './search-modal/search-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeeService} from './employee.service';
import {BsDatepickerModule, BsDropdownModule, ModalModule} from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
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
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Employee Frontend'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Employee Frontend');
  }));
  it('should render application title', async() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('#title'));
    const spanEl = el.nativeElement;
    expect(spanEl.innerHTML).toContain('Employee Management Portal');
  });
  it('should render By: line', async() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.word'));
    const spanEl = el.nativeElement;
    expect(spanEl.innerHTML).toContain('By: ');
    const el2 = fixture.debugElement.query(By.css('.web'));
    const spanEl2 = el2.nativeElement;
    expect(spanEl2.innerHTML).toContain('Josh Spears');
  });
  afterEach(function() {
  });
});
