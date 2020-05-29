import { Component, OnInit } from '@angular/core';
import { BiotaDataModel } from 'src/Model/biotaModelMasterData';
import data from '../../assets/BiotaJsonModel.json';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  isEnglish = true;
  public BiotaDataModel : BiotaDataModel;
  constructor() { 
    var asd= JSON.stringify(data);
    this.BiotaDataModel = JSON.parse(asd);
  }

  ngOnInit() {
  }

  ChangeLang() {
    this.isEnglish = !this.isEnglish;
  }
}
