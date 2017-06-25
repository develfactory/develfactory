import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'home-home',
  templateUrl: './home-home.component.html',
  styleUrls: ['home.component.less']
})
export class HomeHomeComponent implements OnInit {

  constructor(private _titleService: Title) {

  }

  ngOnInit(): void {
    this._titleService.setTitle("Home");
  }
}
