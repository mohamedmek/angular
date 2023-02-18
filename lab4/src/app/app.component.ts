import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_test';
  
  students: { name: string; age: number }[] = [];

  handleRegister(student: { name: string; age: number }) {
    this.students.push(student);}
}
