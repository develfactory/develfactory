import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FlashService} from "../../services/flash.service";
import {RequestService} from "../../services/request.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'applications-create',
  templateUrl: 'applications-create.component.html',
  styleUrls: ['home.component.less']
})
export class ApplicationsCreateComponent implements OnInit {

  formSaving: boolean;
  formStep1: Object;
  application: Object;
  currentStep: string;

  constructor(private _titleService: Title, private _requestService: RequestService, private _flashService: FlashService, private _activatedRoute: ActivatedRoute, private _router: Router) {

  }

  ngOnInit(): void {
    this._titleService.setTitle("Create a new application");
    this.formSaving = false;
    this.application = {
      id: this._activatedRoute.snapshot.params['id']
    };
    this.currentStep = this._activatedRoute.snapshot.params['step'];
    this._activatedRoute.params.subscribe(params => {
      this.currentStep = params['step'];
    });

    this.formStep1 = {
      name: '',
      domain: '',
      ssl: false,
    };
  }

  saveForm1() {
    this._requestService.post("/applications", this.formStep1).then(
      data => {
        this.formSaving = false;
        if (data.code == "application_created") {
          this._flashService.success("Application created!", "The application has been created.");
          this.application['id'] = data.result['id'];
          this.application['name'] = this.formStep1['name'];
          this.application['domain'] = this.formStep1['domain'];
          this.application['ssl'] = this.formStep1['ssl'];
          this._router.navigate(["/home/applications/create", this.application['id'], 2]);
        } else {
          this._flashService.error("An error occurred", "An unknown error occurred, please retry.");
        }
      }
    ).catch(
      error => {
        this.formSaving = false;
        this._flashService.error("An error occurred", "An error occurred, please retry.");
      }
    );
  }
}
