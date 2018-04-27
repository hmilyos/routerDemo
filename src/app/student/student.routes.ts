/**
 * Created by ouShiMing on 2017/9/1.
 */
import {StuManageComponent} from "./stu-manage/stu-manage.component";
import {StuFromComponent} from "./stu-from/stu-from.component";


export const studentRoutes = [
  {path: '', component: StuManageComponent},
  {path: ':stuId', component: StuFromComponent},
];

