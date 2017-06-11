import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  constructor(private _titleService: Title) {

  }

  ngOnInit(): void {
    this._titleService.setTitle("Home");
  }
}
