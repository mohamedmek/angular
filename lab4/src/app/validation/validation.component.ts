import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})

export class ValidationComponent {
  myFormControll = new FormGroup ({
    name: new FormControl("mek", [Validators.minLength(3)]),
    age: new FormControl(22, [Validators.min(20), Validators.max(40)]),
    email: new FormControl("example@mail.com", [Validators.email])
  });

validationCheck(){
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

