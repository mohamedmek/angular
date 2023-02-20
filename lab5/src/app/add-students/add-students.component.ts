import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from 'service/students.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent {
 constructor (public myServices:StudentsService){}

  myFormControll = new FormGroup ({
    name: new FormControl("zienab", [Validators.minLength(3)]),
    age: new FormControl(20, [Validators.min(20), Validators.max(40)]),
    email: new FormControl("example@gmail.com", [Validators.email])
  });

validationCheck(name:any, age:any , email:any){
let newStudent={name, age,email};
this.myServices.addStudent(newStudent).subscribe();

  if(this.myFormControll.controls["name"].invalid){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Name should be more than 3 characters !',
    })
  }
  else if(this.myFormControll.controls["age"].invalid){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Age should be between 20-40 years !',
    })
  }
  else if(this.myFormControll.controls["email"].invalid){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Email not valid !',
    })
  }
  else if(this.myFormControll.valid){
    Swal.fire('Great !')
  }
}

}
