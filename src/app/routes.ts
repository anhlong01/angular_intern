import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { StudentComponent } from './student/student.component';
import { AllStudentComponent } from './all-student/all-student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { SubjectComponent } from './subject/subject.component';
import { MarkComponent } from './mark/mark.component';
import { CheckMarkComponent } from './check-mark/check-mark.component';
import { InsertMarkComponent } from './insert-mark/insert-mark.component';
// import {DetailsComponent} from './details/details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'all',
      component: AllStudentComponent,
      title: 'Student list',
    },
    {
      path: 'student/:id',
      component: StudentDetailComponent,
      title: 'Student detail',
    },
    {
      path: 'student/subject/:id',
      component: SubjectComponent,
      title: 'Subject detail',
    },
    {
      path: 'student/mark/:id',
      component: MarkComponent,
      title: 'Mark',
    },
    {
      path: 'student/mark/check/:id',
      component: CheckMarkComponent,
      title: 'Mark',
    },
    {
      path: 'mark/insert',
      component: InsertMarkComponent,
      title: 'Insert Mark',
    },
  ];
export default routeConfig;