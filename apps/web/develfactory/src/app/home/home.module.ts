import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule}   from '@angular/common';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {TooltipModule, AccordionModule} from "ng2-bootstrap";
import {FlashService} from "../../services/flash.service";
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component";
import {ApplicationsCreateComponent} from "./applications-create.component";
import {HomeHomeComponent} from "./home-home.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RequestService} from "../../services/request.service";
import {GithubSettingsComponent} from "./github-settings.component";

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    TooltipModule.forRoot(),
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ToastrModule.forRoot(),
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HomeHomeComponent,
    ApplicationsCreateComponent,
    GithubSettingsComponent
  ],
  providers: [FlashService, RequestService]
})
export class HomeModule {
}
