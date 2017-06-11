import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {AppHomeComponent} from "./app-home.component";


const appRoutes: Routes = [
  {
    path: '',
    component: AppHomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
