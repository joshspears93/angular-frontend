import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { NewModalComponent } from './new-modal/new-modal.component';
import {ModalModule} from 'ngx-bootstrap';
import { EmployeeService} from './employee.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DeleteModalComponent,
    UpdateModalComponent,
    NewModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    EmployeeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
