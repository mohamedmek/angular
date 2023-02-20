import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(public myClient:HttpClient ) { }
  BaseUrl="http://localhost:3000/students";
   // Get all students
getAllStudents(){
  return this.myClient.get(this.BaseUrl)
}
// Get student by ID
getStudentById(id:any) {
  return this.myClient.get(this.BaseUrl+"/"+id)
}
 // Add new student
 addStudent(student:any) {
  return this.myClient.post(this.BaseUrl,student)
}
  // Update student
updateStudent(id:any,student:any) {
  return this.myClient.put(this.BaseUrl+"/"+id, student)
}
  // Delete student
  deleteStudent(id:any) {
    return this.myClient.delete(this.BaseUrl+"/"+id)
  }
}
