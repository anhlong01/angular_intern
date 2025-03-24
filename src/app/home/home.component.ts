import { Component } from '@angular/core';
import { RouterLink, RouterOutlet} from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterLink,],
  template: `
    <section class="results px-1">
      <a name="" id="" class="btn btn-primary" role="button" [routerLink]="['all']">1. Xem danh sách sinh viên</a>
      <a name="" id="" class="btn btn-primary" role="button" [routerLink]="['mark/insert']">2. Nhập điểm của sinh viên</a>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}



