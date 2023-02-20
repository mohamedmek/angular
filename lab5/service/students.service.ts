import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(public httpClient:HttpClient ) { }
  BaseUrl="http://localhost:3000/students";

  getAllStudents(){
  return this.httpClient.get(this.BaseUrl)
}

getStudentById(id:any) {
  return this.httpClient.get(this.BaseUrl+"/"+id)
}

addStudent(student:any) {
  return this.httpClient.post(this.BaseUrl,student)
}

updateStudent(id:any,student:any) {
  return this.httpClient.put(this.BaseUrl+"/"+id, student)
}

deleteStudent(id:any) {
    return this.httpClient.delete(this.BaseUrl+"/"+id)
  }
}
