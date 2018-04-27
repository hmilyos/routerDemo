/**
 * Created by ouShiMing on 2017/9/1.
 */
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {MySharedModule} from "../shared/shared.module";
import {errorRoutes} from "./error.routes";
import {ErrorComponent} from "./error.component";

@NgModule({
  imports: [
    MySharedModule,
    RouterModule.forChild(errorRoutes)
  ],
  exports: [],
  declarations: [
    ErrorComponent
  ],
  providers: [
  ]
})
export class ErrorModule {
}
