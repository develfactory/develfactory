import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home.component";
import {ApplicationsCreateComponent} from "./applications-create.component";
import {HomeHomeComponent} from "./home-home.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeHomeComponent
      },
      {
        path: 'applications/create',
        component: ApplicationsCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {
}
