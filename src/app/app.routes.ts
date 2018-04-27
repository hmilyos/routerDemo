/**
 * Created by ouShiMing on 2017/8/18.
 */
import {LoginComponent} from "./login/login.component";

export const appRoutes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'admin',
    // canActivate: [LoginGuard],
    loadChildren: './workspace/workspace.module#WorkspaceModule'
  },
  {path: 'error', loadChildren: './error/error.module#ErrorModule'},
  {path: '**', component: LoginComponent},
];
