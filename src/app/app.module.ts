import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ErrorComponent } from './error/error.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {appRoutes} from "./app.routes";
import { HearderComponent } from './hearder/hearder.component';
import { FooterComponent } from './footer/footer.component';
import { StuManageComponent } from './student/stu-manage/stu-manage.component';
import { StuFromComponent } from './student/stu-from/stu-from.component';
import { TeaFromComponent } from './teacher/tea-from/tea-from.component';
import { TeaManageComponent } from './teacher/tea-manage/tea-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorkspaceComponent,
    ErrorComponent,
    HearderComponent,
    FooterComponent,
    StuManageComponent,
    StuFromComponent,
    TeaFromComponent,
    TeaManageComponent
  ],
  imports: [
    FormsModule,
    JsonpModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
