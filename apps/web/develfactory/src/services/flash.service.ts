import {Injectable, OnInit} from '@angular/core';
import {ToastrService, ToastrConfig} from "ngx-toastr";

@Injectable()
export class FlashService implements OnInit {

  constructor(private toastrService: ToastrService, private toastrConfig: ToastrConfig) {

  }

  ngOnInit(): void {
  }

  success(title: string, content: string, duration = 15000) {
    this.toastrConfig.timeOut = duration;
    this.toastrConfig.closeButton = true;
    this.toastrConfig.positionClass = 'toast-top-center';
    this.toastrService.success(title, content);
  }

  error(title: string, content: string, duration = 15000) {
    this.toastrConfig.timeOut = duration;
    this.toastrConfig.closeButton = true;
    this.toastrConfig.positionClass = 'toast-top-center';
    this.toastrService.error(title, content);
  }

  warning(title: string, content: string, duration = 15000) {
    this.toastrConfig.timeOut = duration;
    this.toastrConfig.closeButton = true;
    this.toastrConfig.positionClass = 'toast-top-center';
    this.toastrService.warning(title, content);
  }

  info(title: string, content: string, duration = 15000) {
    this.toastrConfig.timeOut = duration;
    this.toastrConfig.closeButton = true;
    this.toastrConfig.positionClass = 'toast-top-center';
    this.toastrService.info(title, content);
  }
}
