import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule}   from '@angular/common';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {TooltipModule} from "ng2-bootstrap";
import {FlashService} from "../../services/flash.service";
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ToastrModule.forRoot(),
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [FlashService]
})
export class HomeModule {
}
