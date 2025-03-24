import { Component, inject } from '@angular/core';
import { StudentService } from '../student.service';
import { Subject } from '../subject';
import { Student } from '../student';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-insert-mark',
  imports: [CommonModule],
  template: `
    <form class="m-5">

      <div class="form-group col mb-1">
      <label class="col-sm-2 col-form-label">Môn học</label>
      <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          {{selectedSubject ||'Môn học'}}
      </button>
      <ul class="dropdown-menu" >
          <li *ngFor="let subject of subjectList">
            <a class="dropdown-item" (click)="selectSubject($event, subject)">{{subject.subjectDescription}}</a>
          </li>
      </ul>
      </div>

      <div class="form-group col mb-2">
      <label class="col-sm-2 col-form-label">Sinh viên</label>
      <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          {{selectedStudent ||'Sinh viên'}}
      </button>
      <ul class="dropdown-menu" >
          <li *ngFor="let student of studentList">
            <a class="dropdown-item" (click)="selectStudent($event, student.studentId)">{{student.studentId}}</a>
          </li>
      </ul>
      </div>

      <div class="form-group row mb-1">
      <label for="staticEmail" class="col-sm-2 col-form-label">Điểm</label>
      <div class="col-sm-10">
        <input type="number" (keyup)="onKey($event)" min="0" max="10" step="0.01" class="form-control w-25" placeholder="Nhập điểm">
      </div>
    </div>
    <button type="button"  class="btn btn-primary mt-5" (click)="insertMark()">Thêm điểm</button>
    </form>
    <div *ngIf="apiMessage">
      <p class="text-success">{{apiMessage}}</p>
    </div>
    <div *ngIf="errorMessage">
      <p class="text-danger">{{errorMessage}}</p>
    </div>
  `,
  styleUrl: './insert-mark.component.css'
})
export class InsertMarkComponent {
  selectedSubject: string = "";
  selectedStudent: string = "";
  subjectId: number = -1;
  apiMessage: string = "";
  errorMessage: string = "";
  inputValue: number = -1;
  studentService: StudentService = inject(StudentService)
  subjectList: Subject[] = [];
  studentList: Student[] = [];

  onKey(event: Event) {
    this.inputValue = Number((event.target as HTMLInputElement).value);
    console.log(this.inputValue); 
  }
  selectSubject(event: Event, subject: Subject){
    event.preventDefault();
    this.selectedSubject = subject.subjectDescription;
    this.subjectId = subject.subjectId;
  }

  selectStudent(event: Event, item: string){
    event.preventDefault();
    this.selectedStudent = item;
  }

  constructor(){
    this.studentService.getAllSubject().then(subjectList =>{
      this.subjectList = subjectList;
      // console.log(subjectList)
    })

    this.studentService.getAllStudent().then(studentList =>{
      this.studentList = studentList;
      // console.log(this.studentList)
    })
  }

  insertMark(){
    this.errorMessage = "";
    if(!this.selectedStudent || this.subjectId ===-1 || this.inputValue === -1){
      console.log(this.selectedStudent)
      console.log(this.subjectId)
      console.log(this.inputValue)
      this.errorMessage = "Chưa nhập hết thông tin";
    }
    else{
    this.studentService.insertMark(this.selectedStudent, this.subjectId, this.inputValue).subscribe(
      (response)=>{
        this.apiMessage = "Nhập điểm thành công";
      },
      (error)=>{
        this.errorMessage = error.error.message;
      }
    )
  }
  console.log(this.errorMessage);
  }

}






