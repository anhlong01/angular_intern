import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Student } from '../student';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-student',
  imports: [CommonModule,RouterLink],
  template: `
    <div class="card text-left my-1">
  <div class="card-body">
    <h4 class="card-title">Mã sinh viên: {{student.studentId}}</h4>
    <a name="" id="" class="btn btn-primary my-1" role="button" [routerLink]="['/student', student.studentId]">Xem chi tiết</a>
    <a name="" id="" class="btn btn-info my-1" role="button" [routerLink]="['/student/subject', student.studentId]">Xem môn đăng ký</a>
    <a name="" id="" class="btn btn-success my-1" role="button" [routerLink]="['/student/mark', student.studentId]">Xem điểm môn học</a>
    <a name="" id="" class="btn btn-secondary my-1" role="button" [routerLink]="['/student/mark/check', student.studentId]">Xem kết quả trượt đỗ</a>
  </div>
</div>
  `,
  styleUrl: './student.component.css'
})
export class StudentComponent {
  @Input() student!: Student;
}





