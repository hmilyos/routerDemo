/**
 * Created by ouShiMing on 2017/8/18.
 */
import {LoginComponent} from "./login/login.component";
import {ErrorComponent} from "./error/error.component";
import {WorkspaceComponent} from "./workspace/workspace.component";
import {StuManageComponent} from "./student/stu-manage/stu-manage.component";
import {StuFromComponent} from "./student/stu-from/stu-from.component";
import {TeaManageComponent} from "./teacher/tea-manage/tea-manage.component";
import {TeaFromComponent} from "./teacher/tea-from/tea-from.component";



export const appRoutes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: WorkspaceComponent,
    children: [
      {path: '', redirectTo: 'student', pathMatch: 'full'},
      {path: 'student', component: StuManageComponent},
      {path: 'student/:stuId', component: StuFromComponent},
      {path: 'teacher', component: TeaManageComponent},
      {path: 'teacher/:tId', component: TeaFromComponent},
    ]
  },
  {path: 'error', component: ErrorComponent},
  {path: '**', component: LoginComponent},
];
