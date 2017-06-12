import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Headers, Http} from "@angular/http";
import {FlashService} from "../../services/flash.service";

@Component({
  selector: 'applications-create',
  templateUrl: 'applications-create.component.html',
  styleUrls: []
})
export class ApplicationsCreateComponent implements OnInit {

  formSaving: boolean;
  form: Object;

  constructor(private _titleService: Title, private _http: Http, private _flashService: FlashService) {

  }

  ngOnInit(): void {
    this._titleService.setTitle("Create a new application");
    this.formSaving = false;
    this.resetForm();
  }

  private resetForm() {
    this.form = {
      name: '',
      content: '',
    };
  }

  private _convertObjectToParams(obj: Object): string {
    let p = [];
    for (let key in obj) {
      p.push(key + '=' + encodeURIComponent(obj[key]));
    }
    return p.join('&');
  }

  saveForm() {
    // TODO create a dedicated service for requests
    // TODO replace URL by dynamic url
    // TODO optimize the convert function to allow multiple-level objects
    this.formSaving = true;
    let h = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    });
    let data = this._convertObjectToParams(this.form);
    this._http.post('http://local.api.develfactory.net/applications', data, {headers: h}).subscribe(
      data => {
        let json = data.json();
        this.formSaving = false;
        if (json.code == "application_created") {
          this._flashService.success("Application created!", "The application has been created.");
          this.resetForm();
        } else {
          this._flashService.error("An error occurred", "An unknown error occurred, please retry.");
        }
      },
      err => {
        this.formSaving = false;
        this._flashService.error("An error occurred", "An error occurred, please retry.");
      }
    );

  }
}
