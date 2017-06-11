import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FlashService} from "../services/flash.service";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {TooltipModule} from "ng2-bootstrap";
import {HomeModule} from "./home/home.module";
import {AppRoutingModule} from "./app-routing.module";
import {AppHomeComponent} from "./app-home.component";

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    HomeModule
  ],
  providers: [FlashService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
