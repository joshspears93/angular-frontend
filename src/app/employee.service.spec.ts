import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {EmployeeService} from './employee.service';
import {Employee} from './employee';

describe('EmployeeService', () => {
  let employeeService: EmployeeService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  const employeeArray = [{
    id: 'id1',
    firstName: 'John',
    lastName: 'Smith',
    middleInitial: 'B',
    emailAddress: 'smith_jones@google.com',
    phoneNumber: '7894561236',
    positionCategory: 'Direct',
    dateHired: '2017-11-15',
    addressOne: '6895 Working Lane',
    addressTwo: 'Apt 213',
    city: 'Virginia Beach',
    state: 'VA',
    zipCode: 22304,
    active: true
  },
    {
      id: 'id2',
      firstName: 'Jane',
      lastName: 'Doe',
      middleInitial: 'G',
      emailAddress: 'doe_jane@google.com',
      phoneNumber: '1234567891',
      positionCategory: 'InDirect',
      dateHired: '2015-05-15',
      addressOne: '123 Test Court',
      addressTwo: '',
      city: 'Richmond',
      state: 'VA',
      zipCode: 22316,
      active: true
    },
    {
      id: 'id3',
      firstName: 'Terry',
      lastName: 'Jones',
      middleInitial: 'H',
      emailAddress: 'Terry_jones@google.com',
      phoneNumber: '1593571234',
      positionCategory: 'Director',
      dateHired: '2010-06-12',
      addressOne: '6579 Loser Lane',
      addressTwo: '',
      city: 'Henrico',
      state: 'VA',
      zipCode: 45678,
      active: true
    },
    {

      id: 'id4',
      firstName: 'Angie',
      lastName: 'Jones',
      middleInitial: 'Q',
      emailAddress: 'jones_angie@google.com',
      phoneNumber: '9513577856',
      positionCategory: 'Director',
      dateHired: '2005-03-23',
      addressOne: '336 Winning Road',
      addressTwo: '',
      city: 'Harrisonburg',
      state: 'VA',
      zipCode: 78645,
      active: true
    }];
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
  describe('getEmployees()', () => {
    let expectedEmployees: Employee[];
    beforeEach(() => {
      employeeService = TestBed.get(EmployeeService);
      expectedEmployees = employeeArray;
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
        employees => expect(employees.length).toEqual(0, 'should have empty employees array'),
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
  describe('getEmployeeByID()', () => {
    const expectedEmployee:  Array<Employee> = [];
    beforeEach(() => {
      employeeService = TestBed.get(EmployeeService);
      expectedEmployee.push(employeeArray[0]);
    });
    it('should return expected employee by id( called once)', () => {
      employeeService.getEmployeeById('id1').subscribe(
        employee => expect(employee).toEqual(employeeArray[0], 'should return expected employee'),
        fail
      );
      const req = httpTestingController.expectOne(employeeService.employeeUrl + '/id1');
      expect(req.request.method).toEqual('GET');
      req.flush(employeeArray[0]);
    });
    it('should return okay returning no matching employee', () => {
      employeeService.getEmployeeById('').subscribe(
        employee => expect(employee).toEqual(null, 'should return no employee'),
        fail
      );
      const req = httpTestingController.expectOne(employeeService.employeeUrl + '/');
      expect(req.request.method).toEqual('GET');
      req.flush(null);
    });
    it('should return expected employees (called multiple times)', () => {
      employeeService.getEmployees().subscribe();
      employeeService.getEmployees().subscribe();
      employeeService.getEmployees().subscribe(
        employee => expect(employee).toEqual(expectedEmployee, 'should return expected employee'),
        fail
      );

      const requests = httpTestingController.match(employeeService.employeeUrl);
      expect(requests.length).toEqual(3, 'calls to getEmployeeById()');

      // Respond to each request with different mock hero results
      requests[0].flush(expectedEmployee);
      requests[1].flush(expectedEmployee);
      requests[2].flush(expectedEmployee);
    });
  });
  describe('addNewEmployee()', () => {
    const expectedEmployee:  Array<Employee> = [];
    beforeEach(() => {
      employeeService = TestBed.get(EmployeeService);
      expectedEmployee.push(employeeArray[3]);
    });
    it('should return new employee', () => {
      employeeService.addNewEmployee(employeeArray[3]).subscribe(
        employee => expect(employee).toEqual(expectedEmployee, 'should return new employee'),
        fail
      );
      const req = httpTestingController.expectOne(employeeService.employeeUrl);
      expect(req.request.method).toEqual('POST');
      req.flush(expectedEmployee);
    });
    it('should return invalid employee', () => {
      const badEmployee = employeeArray[3];
      badEmployee.lastName = '';
      employeeService.addNewEmployee(badEmployee).subscribe(
        employee => expect(employee).toEqual([], 'should return nothing'),
        fail
      );
      const req = httpTestingController.expectOne(employeeService.employeeUrl);
      expect(req.request.method).toEqual('POST');
      req.flush([]);
    });
  });
  describe('updateEmployee()', () => {
    const updatedEmployee = {
      id: 'id2',
      firstName: 'Frank',
      lastName: 'Jones',
      middleInitial: 'Q',
      emailAddress: 'jones_frank@google.com',
      phoneNumber: '3571597896',
      positionCategory: 'Director',
      dateHired: '2010-06-12',
      addressOne: '6579 Loser Lane',
      addressTwo: '',
      city: 'Henrico',
      state: 'VA',
      zipCode: 45678,
      active: true
    };
    beforeEach(() => {
      employeeService = TestBed.get(EmployeeService);
    });
    it('should delete selected employee', () => {
      employeeService.updateEmployee(updatedEmployee).subscribe(
        employee => expect(employee).toEqual(updatedEmployee, 'should return matching employee'),
        fail
      );
      const req = httpTestingController.expectOne(employeeService.employeeUrl + '/id2');
      expect(req.request.method).toEqual('PUT');
      req.flush(updatedEmployee);
    });
  });
  describe('deleteEmployeeById()', () => {
    const expectedEmployee:  Array<Employee> = [];
    beforeEach(() => {
      employeeService = TestBed.get(EmployeeService);
      expectedEmployee.push(employeeArray[0]);
      expectedEmployee.push(employeeArray[1]);
      expectedEmployee.push(employeeArray[2]);
    });
    it('should delete selected employee', () => {
      employeeService.deleteEmployeeById('id4').subscribe(
        employee => expect(employee).toEqual(expectedEmployee, 'should delete matching employee'),
        fail
      );
      const req = httpTestingController.expectOne(employeeService.employeeUrl + '/id4');
      expect(req.request.method).toEqual('DELETE');
      req.flush(expectedEmployee);
    });
    it('should not delete selected employee', () => {
      employeeService.deleteEmployeeById('id5').subscribe(
        employee => expect(employee).toEqual(null, 'should not delete matching employee'),
        fail
      );
      const req = httpTestingController.expectOne(employeeService.employeeUrl + '/id5');
      expect(req.request.method).toEqual('DELETE');
      req.flush(null);
    });
  });
  describe('findEmployees()', () => {
    const expectedEmployee:  Array<Employee> = [];
    beforeEach(() => {
      employeeService = TestBed.get(EmployeeService);
      expectedEmployee.push(employeeArray[2]);
      expectedEmployee.push(employeeArray[3]);
    });
    it('should return matching employees', () => {
      employeeService.findEmployees('Jones').subscribe(
        employee => expect(employee).toEqual(expectedEmployee, 'should return matching employees'),
        fail
      );
      const req = httpTestingController.expectOne(employeeService.employeeUrl + '/search/Jones');
      expect(req.request.method).toEqual('GET');
      req.flush(expectedEmployee);
    });
  });
});
