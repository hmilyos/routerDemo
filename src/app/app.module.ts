import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {appRoutes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent
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
