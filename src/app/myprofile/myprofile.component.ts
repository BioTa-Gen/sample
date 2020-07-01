import { Component, OnInit } from '@angular/core';
import { BiotaDataModel } from 'src/Model/biotaModelMasterData';
import jsonData from '../../assets/BiotaJsonModel.json';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  public BiotaDataModel: BiotaDataModel;
  isEnglish = false;
  xcdfv: Subscription;
  constructor(private httpClient: HttpClient) {
    // var asd = JSON.stringify(jsonData);
    // this.BiotaDataModel = JSON.parse(asd);
    this.BiotaDataModel=new BiotaDataModel();
    this.xcdfv= this.httpClient.get("assets/BiotaJsonModel.json").subscribe(data =>{
      // console.log(data);
      // var asd= JSON.stringify(data);
    this.BiotaDataModel = data as BiotaDataModel;
    console.log(this.BiotaDataModel);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.xcdfv.unsubscribe();
  }
  
  ChangeLang() {
    this.isEnglish = !this.isEnglish;
  }

  IsStringNullOrEmpty(value:string):boolean
  {
    return (!value||value=="")?true:false;
  }
}
