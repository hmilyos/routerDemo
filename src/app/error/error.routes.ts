/**
 * Created by ouShiMing on 2017/9/1.
 */

import {ErrorComponent} from "./error.component";


export const errorRoutes = [
  {path: '', component: ErrorComponent},
  {path: ':code', component: ErrorComponent},
];
