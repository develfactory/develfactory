import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Headers, Http} from "@angular/http";
import {FlashService} from "../../services/flash.service";
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'github-settings',
  templateUrl: 'github-settings.component.html',
  styleUrls: ['home.component.less']
})
export class GithubSettingsComponent implements OnInit {

  formSaving: boolean;
  form: Object;
  helpDisplayed: boolean;

  constructor(private _titleService: Title, private _http: Http, private _flashService: FlashService, private _requestService: RequestService) {

  }

  private resetForm() {
    this.form = {
      username: '',
      token: '',
    };
  }

  ngOnInit(): void {
    this._titleService.setTitle("Update your GitHub settings");
    this.formSaving = false;
    this.helpDisplayed = true;
    this.resetForm();
    this.fetchGithubAccess();
  }

  saveForm() {
    this.formSaving = true;
    this._requestService.put("/github", this.form).then(
      data => {
        this.formSaving = false;
        this._flashService.success("GitHub credentials saved", "Your GitHub credentials have been saved.");
      }
    ).catch(
      error => {
        this.formSaving = false;
        this._flashService.error("An error occured", "An error occured when saving the GitHub credentials.");
      }
    );
    console.log(this.form);
  }

  private fetchGithubAccess() {
    this._requestService.get("/github").then(
      data => {
        this.form['username'] = data.username;
        this.form['token'] = data.token;
        if (data.username != '') {
          this.helpDisplayed = false;
        }
      }
    ).catch(
      error => {
        this._flashService.error("An error occured", "An error occured when loading the GitHub credentials.");
      }
    );
  }
}
