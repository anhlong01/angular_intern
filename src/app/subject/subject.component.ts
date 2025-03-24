import { Component, inject } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-subject',
  imports: [CommonModule],
  template: `
  <ul *ngIf ="subjectList" class="list-group m-2">
    <li class="list-group-item" *ngFor="let subject of subjectList">{{subject}}</li>
  </ul>


  <p *ngIf ="subjectList && subjectList.length===0" class="m-2">Học sinh này chưa đăng ký môn nào</p>
  `,
  styleUrl: './subject.component.css'
})
export class SubjectComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  subjectList: String[] | undefined;
  studentService: StudentService = inject(StudentService)

  constructor(){
    const studentId = parseInt(this.route.snapshot.params["id"],10);
    this.studentService.getSubjectById(studentId).then(subjectList =>{
      this.subjectList = subjectList;
    })
  }
}






