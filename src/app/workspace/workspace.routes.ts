/**
 * Created by ouShiMing on 2017/9/1.
 */
import {WorkspaceComponent} from "./workspace.component";


export const workspaceRoutes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      {path: '', redirectTo: 'student', pathMatch: 'full'},
      {
        path: 'student',
        loadChildren: './../student/student.module#StudentModule'
      },
      {
        path: 'teacher',
        loadChildren: './../teacher/teacher.module#TeacherModule'
      }
    ]
  }
];

