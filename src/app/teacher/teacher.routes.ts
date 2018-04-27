/**
 * Created by ouShiMing on 2017/9/1.
 */
import {TeaFromComponent} from "./tea-from/tea-from.component";
import {TeaManageComponent} from "./tea-manage/tea-manage.component";


export const teacherRoutes = [
  {path: '', component: TeaManageComponent},
  {path: ':tId', component: TeaFromComponent},
];

