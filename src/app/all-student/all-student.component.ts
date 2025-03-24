import { Component, inject } from '@angular/core';
import { Student } from '../student';
import {CommonModule} from '@angular/common';
import { StudentComponent } from '../student/student.component';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-all-student',
  standalone: true, 
  imports: [CommonModule,StudentComponent],

  template: `
  <div class="container my-3">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <app-student
      *ngFor="let student of studentList"
      [student] = "student">
    </app-student>
    </div>
    </div>
  `,
  styleUrl: './all-student.component.css'
})
export class AllStudentComponent {
  studentList: Student[] =[];
  studentService: StudentService = inject(StudentService)

  constructor(){
    this.studentService.getAllStudent().then((studentList: Student[])=>{
      
      this.studentList = studentList;
      console.log(this.studentList);
    });
  }
}
