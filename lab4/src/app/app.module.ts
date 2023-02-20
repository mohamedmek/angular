import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationComponent } from './validation/validation.component';
import { UsersComponent } from './users/users.component';
import { ErrorsComponent } from './errors/errors.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';

const routes:Routes  = [
  {path:"", component:ValidationComponent}
  ,{path:"users", component:UsersComponent},
  {path:"user/:id", component:DetailsComponent},
  {path:"errors", component:ErrorsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    ValidationComponent,
    UsersComponent,
    ErrorsComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }