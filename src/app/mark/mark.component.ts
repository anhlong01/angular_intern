import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mark',
  imports: [CommonModule],
  template: `
    <table *ngIf ="mark" class="table table-bordered  m-2" >
      <thead>
        <tr>
          <th>Môn học</th>
          <th>Điểm</th>
        </tr>
      </thead>
      <tbody >
        <tr *ngFor = "let key of Object.keys(mark)">
          <td scope="row">{{key}}</td>
          <td>{{mark[key]}}</td>
        </tr>
      </tbody>
  </table>

  <p *ngIf="!mark">Loading...</p>

  `,
  styleUrl: './mark.component.css'
})

export class MarkComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  mark: {[key: string]: number} |undefined;
  studentService: StudentService = inject(StudentService);
  Object = Object;
  constructor(){
    const studentId = parseInt(this.route.snapshot.params['id'],10);
    this.studentService.getMarkById(studentId).then(mark=>{
      this.mark = mark;
      console.log(this.mark);
    })  
  }
}



