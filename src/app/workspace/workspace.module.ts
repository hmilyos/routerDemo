/**
 * Created by ouShiMing on 2017/9/1.
 */
import {MySharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {WorkspaceComponent} from "./workspace.component";
import {workspaceRoutes} from "./workspace.routes";
import {HearderComponent} from "../hearder/hearder.component";
import {FooterComponent} from "../footer/footer.component";

@NgModule({
  imports: [
    MySharedModule,
    RouterModule.forChild(workspaceRoutes)
  ],
  exports: [],
  declarations: [
    HearderComponent,
    FooterComponent,
    WorkspaceComponent
  ],
  providers: [
  ]
})
export class WorkspaceModule {

}
