import { Component, inject } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-check-mark',
  imports: [CommonModule],
  template: `
    <h5 *ngIf ="result && result.includes('tạch')" class="text-danger m-2">{{result}}</h5>
    <h5 *ngIf ="result && result.includes('qua')" class="text-success m-2">{{result}}</h5>
    <h5 *ngIf ="!result" class="text-info m-2">Sinh viên không đăng ký môn nào</h5>
  `,
  styleUrl: './check-mark.component.css'
})
export class CheckMarkComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  studentService: StudentService = inject(StudentService);
  result : String | undefined;
  constructor(){
    const studentId = parseInt(this.route.snapshot.params['id'],10);
    this.studentService.checkPass(studentId).then(result =>{
      this.result = result;
    })
  }
}
