import { Injectable } from '@angular/core';
import { Student } from './student';
import { StudentComponent } from './student/student.component';
import { Subject } from './subject';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService { 
  url = "http://localhost:8080/student";
  async getAllStudent(): Promise<Student[]>{
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      return data.result ?? [];
    } catch (error) {
      console.log('Error fetching students:', error);
      return []; // Return an empty array in case of error
    }
  
  }

  async getStudentById(id: number): Promise<Student | undefined>{
    try{
      const response = await fetch(`${this.url}/${id}`);
      const data = await response.json();
      return data.result ?? [];
    }catch(error){
      console.log('Error fetching students', error);
      return;
    }
  }

  async getSubjectById(id: number): Promise<String[] | undefined>{
    try{
      const response = await fetch(`${this.url}/subject/${id}`);
      const data = await response.json();
      return data.result ?? [];
    }catch(error){
      console.log('Error fetching students', error);
      return [];
    }
  }

  async getMarkById(id:number): Promise<{[key:string]:number }|undefined>{
    try{
      const response = await fetch(`${this.url}/mark/${id}`);
      const data = await response.json();
      return data.result ?? {};
    }catch(error){
      console.log('Error fetching students', error);
      return {};
    }
  }

  async checkPass(id:number): Promise<String | undefined>{
    try{
      const response = await fetch(`${this.url}/mark/check/${id}`);
      const data = await response.json();
      return data.result ?? "";
    } catch(error){
      console.log('Error fetching result', error);
      return "";
    }
  }

  async getAllSubject(): Promise<Subject[]>{
    try {
      const response = await fetch(`${this.url}/subject/all`);
      const data = await response.json();
      return data.result ?? [];
    } catch (error) {
      console.log('Error fetching result', error);
      return [];
    }
  }

  constructor(private http: HttpClient){}
    insertMark(studentId: string, subjectId: number, mark:number): Observable<any>{
      const params = new HttpParams()
      .set('studentId', studentId)
      .set('subjectId', subjectId)
      .set('mark', mark)
      return this.http.post(`${this.url}/mark/insert`, null, {params})
    
  }
  
  
}
