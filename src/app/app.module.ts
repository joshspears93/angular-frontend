import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { NewModalComponent } from './new-modal/new-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DeleteModalComponent,
    UpdateModalComponent,
    NewModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
