import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  isEnglish=true;

  constructor() { }

  ngOnInit() {
  }

  ChangeLang()
  {
    this.isEnglish = !this.isEnglish;
  }
}
