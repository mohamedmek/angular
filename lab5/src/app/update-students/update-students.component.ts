import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'service/students.service';

@Component({
  selector: 'app-update-students',
  templateUrl: './update-students.component.html',
  styleUrls: ['./update-students.component.css']
})
export class UpdateStudentsComponent implements OnInit {
  public id = 0;
  public student: any = {
    name: '',
    age: 0,
    email: ''
  };

  constructor(
    public myActivate: ActivatedRoute,
    public myService: StudentsService
  ) {
    this.id = myActivate.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.myService.getStudentById(this.id).subscribe({
      next: (data) => {
        this.student = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onSubmit() {
    this.myService.updateStudent(this.id, this.student).subscribe({
      next: (data) => {
        this.student = data;
      },
    });
  }
}
