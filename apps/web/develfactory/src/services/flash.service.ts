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
    this.toastrService.success(content, title);
  }

  error(title: string, content: string, duration = 15000) {
    this.toastrConfig.timeOut = duration;
    this.toastrConfig.closeButton = true;
    this.toastrConfig.positionClass = 'toast-top-center';
    this.toastrService.error(content, title);
  }

  warning(title: string, content: string, duration = 15000) {
    this.toastrConfig.timeOut = duration;
    this.toastrConfig.closeButton = true;
    this.toastrConfig.positionClass = 'toast-top-center';
    this.toastrService.warning(content, title);
  }

  info(title: string, content: string, duration = 15000) {
    this.toastrConfig.timeOut = duration;
    this.toastrConfig.closeButton = true;
    this.toastrConfig.positionClass = 'toast-top-center';
    this.toastrService.info(content, title);
  }
}
