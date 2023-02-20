import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'service/students.service';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {
public  id=0;
public  student:any;
constructor(myActivate:ActivatedRoute ,public myService:StudentsService){
// console.log( this.id= myActivate.snapshot.params["id"]);
 this.id= myActivate.snapshot.params["id"];
}
ngOnInit(): void {
this.myService.getStudentById(this.id).subscribe({
  next:(data)=>{
    console.log(data);
this.student=data;
  },
  error:(error)=>{
    // console.log(error);

  },
});
}
}

