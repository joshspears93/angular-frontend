import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { NewModalComponent } from './new-modal/new-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { EmployeeService} from './employee.service';
import { BsDropdownModule} from 'ngx-bootstrap';
import { BsDatepickerModule} from 'ngx-bootstrap';
import { ReactiveFormsModule} from '@angular/forms';
import { SearchModalComponent } from './search-modal/search-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DeleteModalComponent,
    UpdateModalComponent,
    NewModalComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
