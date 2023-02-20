import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'service/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
constructor (public myService: StudentsService){}
students:any;
 ngOnInit():void{
  // students:{}[]=[];
this.myService.getAllStudents().subscribe(
  {
    next:(data)=>{
      this.students = data;
    },
    error:(error)=>{console.log(error );
    }

  }
);
}
deleteStudent(id: any) {
  const index = this.students.findIndex((student: any) =>student.id === id);
  this.students.splice(index, 1);

  this.myService.deleteStudent(id).subscribe({
    next: () => {
      console.log('Deleted successfully!');
    },
    error: (error) => {
      console.log(error);
    }
  });
}
}

