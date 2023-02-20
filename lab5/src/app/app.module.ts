import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { UpdateStudentsComponent } from './update-students/update-students.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes = [
{path:"",component:StudentsComponent},
{path:"students",component:StudentsComponent},
{path:"students/:id" ,component:StudentsDetailsComponent},
{path:"add",component:AddStudentsComponent},
{path:"update/:id",component:UpdateStudentsComponent},
{path:"error",component:ErrorComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentsDetailsComponent,
    HeaderComponent,
    AddStudentsComponent,
    UpdateStudentsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
