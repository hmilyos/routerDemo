/**
 * Created by ouShiMing on 2017/9/1.
 */
import {MySharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TeaFromComponent} from "./tea-from/tea-from.component";
import {TeaManageComponent} from "./tea-manage/tea-manage.component";
import {teacherRoutes} from "./teacher.routes";




@NgModule({
  imports: [
    MySharedModule,
    RouterModule.forChild(teacherRoutes)
  ],
  exports: [],
  declarations: [
    TeaFromComponent,
    TeaManageComponent
  ],
  providers: [
  ]
})
export class TeacherModule {

}
