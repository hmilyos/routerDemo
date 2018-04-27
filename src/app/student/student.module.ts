/**
 * Created by ouShiMing on 2017/9/1.
 */
import {MySharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {StuManageComponent} from "./stu-manage/stu-manage.component";
import {StuFromComponent} from "./stu-from/stu-from.component";
import {studentRoutes} from "./student.routes";




@NgModule({
  imports: [
    MySharedModule,
    RouterModule.forChild(studentRoutes)
  ],
  exports: [],
  declarations: [
    StuManageComponent,
    StuFromComponent
  ],
  providers: [
  ]
})
export class StudentModule {

}
