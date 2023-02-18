import { Component } from '@angular/core';

@Component({
  selector: 'app-all-in-one',
  templateUrl: './all-in-one.component.html',
  styleUrls: ['./all-in-one.component.css']
})
export class AllInOneComponent {
  name = "mm,.";
  age = "";

  students = {name:this.name, age:this.age};

  add(){
    console.log(this.students);
  }
  // students:{name:string, age:string}[] = []
  // Add(){
  //   if(+this.age >= 15){
  //     let student = {name:this.name, age:this.age};
  //     // console.log(student);
  //     this.students.push(student);
  //     // console.log(this.students);
  //   }
  // }
}
