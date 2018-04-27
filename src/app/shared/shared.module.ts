/**
 * Created by ouShiMing on 2017/8/2.
 */
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {HttpModule, JsonpModule} from "@angular/http";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JsonpModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [ ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule
  ]
})

export class MySharedModule { }
