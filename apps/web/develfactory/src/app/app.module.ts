import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FlashService} from "../services/flash.service";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {TooltipModule} from "ng2-bootstrap";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [FlashService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
