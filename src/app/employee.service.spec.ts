import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {EmployeeService} from './employee.service';
import {Employee} from './employee';

describe('EmployeeService', () => {
  let employeeService: EmployeeService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmployeeService
      ],
      imports: [
        HttpClientTestingModule
      ],
    });
    employeeService = TestBed.get(EmployeeService);
    httpTestingController = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);
  });
  it('employee service should be created', inject([EmployeeService], (service: EmployeeService) => {
    expect(service).toBeTruthy();
  }));
  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
  describe('getEmployees', () => {
    let expectedEmployees: Employee[];
    beforeEach(() => {
      employeeService = TestBed.get(EmployeeService);
      expectedEmployees = [
        {
          id: 'id1',
          firstName : 'John',
          lastName : 'Smith',
          middleInitial : 'B',
          emailAddress : 'smith_jones@google.com',
          phoneNumber : '7894561236',
          positionCategory : 'Direct',
          dateHired : '2017-11-15',
          addressOne : '6895 Working Lane',
          addressTwo : 'Apt 213',
          city : 'Virginia Beach',
          state : 'VA',
          zipCode : 22304,
          active : true
        },
        {
          id: 'id2',
          firstName : 'Jane',
          lastName : 'Doe',
          middleInitial : 'G',
          emailAddress : 'doe_jane@google.com',
          phoneNumber : '1234567891',
          positionCategory : 'InDirect',
          dateHired : '2015-05-15',
          addressOne : '123 Test Court',
          addressTwo : '',
          city : 'Richmond',
          state : 'VA',
          zipCode : 22316,
          active : true
        },
        {
          id: 'id3',
          firstName : 'Terry',
          lastName : 'Jones',
          middleInitial : 'H',
          emailAddress : 'Terry_jones@google.com',
          phoneNumber : '1593571234',
          positionCategory : 'Director',
          dateHired : '2010-06-12',
          addressOne : '6579 Loser Lane',
          addressTwo : '',
          city : 'Henrico',
          state : 'VA',
          zipCode : 45678,
          active : true
        },
        {

          id: 'id4',
          firstName : 'Angie',
          lastName : 'Jones',
          middleInitial : 'Q',
          emailAddress : 'jones_angie@google.com',
          phoneNumber : '9513577856',
          positionCategory : 'Director',
          dateHired : '2005-03-23',
          addressOne : '336 Winning Road',
          addressTwo : '',
          city : 'Harrisonburg',
          state : 'VA',
          zipCode : 78645,
          active : true
        }
      ] as Employee[];
    });
    it('should return expected employees (called once)', () => {
      employeeService.getEmployees().subscribe(
        employees => expect(employees).toEqual(expectedEmployees, 'should return expected employees'),
        fail
      );
      const req = httpTestingController.expectOne(employeeService.employeeUrl);
      expect(req.request.method).toEqual('GET');
      req.flush(expectedEmployees);
    });
    it('should be OK returning no employees', () => {
      employeeService.getEmployees().subscribe(
        employees => expect(employees.length).toEqual(0, 'should have empty emloyees array'),
        fail
      );
      const req = httpTestingController.expectOne(employeeService.employeeUrl);
      req.flush([]);
    });
    it('should return expected employees (called multiple times)', () => {

      employeeService.getEmployees().subscribe();
      employeeService.getEmployees().subscribe();
      employeeService.getEmployees().subscribe(
        employees => expect(employees).toEqual(expectedEmployees, 'should return expected employees'),
        fail
      );

      const requests = httpTestingController.match(employeeService.employeeUrl);
      expect(requests.length).toEqual(3, 'calls to getEmployees()');

      // Respond to each request with different mock hero results
      requests[0].flush([]);
      requests[1].flush([{
        id: 'id1',
        firstName : 'John',
        lastName : 'Smith',
        middleInitial : 'B',
        emailAddress : 'smith_jones@google.com',
        phoneNumber : '7894561236',
        positionCategory : 'Direct',
        dateHired : '2017-11-15',
        addressOne : '6895 Working Lane',
        addressTwo : 'Apt 213',
        city : 'Virginia Beach',
        state : 'VA',
        zipCode : 22304,
        active : true
      }]);
      requests[2].flush(expectedEmployees);
    });
  });
});
