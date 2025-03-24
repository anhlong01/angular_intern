import { Component, inject } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student-detail',
  imports: [],
  template: `
    <div class="card text-left mx-1 my-2">
  <div class="card-body">
    <h4 class="card-title">Mã sinh viên: {{student?.studentId}}</h4>
    <p class="card-text">Họ tên: {{student?.studentName}}</p>
    <p class="card-text">Giới tính: {{student?.sex}}</p>
    <p class="card-text">Ngày sinh: {{student?.dob}}</p>
    <p class="card-text">Lớp: {{student?.studentClass}}</p>
    <p class="card-text">Khóa học: {{student?.studentKhoahoc}}</p>
  </div>
</div>
  `,
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  studentService = inject(StudentService);
  student: Student | undefined;

  constructor() {
    const studentId = parseInt(this.route.snapshot.params['id'], 10);
    this.studentService.getStudentById(studentId).then(student => {
    this.student = student;
    });
  }
}


