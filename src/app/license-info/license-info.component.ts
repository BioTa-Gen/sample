import { Component, OnInit } from '@angular/core';
import { TenantInfo } from 'src/Model/tenant-info';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-license-info',
  templateUrl: './license-info.component.html',
  styleUrls: ['./license-info.component.css']
})
export class LicenseInfoComponent implements OnInit {

  pipe = new DatePipe('en-US');
  now = Date.now();
    
  mySimpleFormat = this.pipe.transform(this.now, 'MM/dd/yyyy');
  myShortFormat = this.pipe.transform(this.now, 'short');

  TenantInformation: TenantInfo[]=[];

  constructor() {
    let testobj: TenantInfo = new TenantInfo;

    testobj.Tokan=1;
    testobj.ClientID = "Z01YAP";
    testobj.ClientName = "Aston Martin";
    testobj.Enckey = null;
    testobj.MAC = "NALSNLAS132";
    testobj.Version = "1.0.1";
    testobj.LicenseMode = "Basic";
    testobj.CreatedDate=new Date();
    testobj.ExpiryDate=new Date("2021-05-20");

    this.TenantInformation.push(testobj);

    let tempobj: TenantInfo = new TenantInfo;

    tempobj.Tokan=2;
    tempobj.ClientID = "ASD12G";
    tempobj.ClientName = "Chris Hemsworth";
    tempobj.Enckey=null;
    tempobj.MAC="S12GHJ121DG"
    tempobj.Version = "1.0.1";
    tempobj.LicenseMode="Sharewere";
    tempobj.CreatedDate=new Date("04-05-2020");
    tempobj.ExpiryDate=new Date("04-05-2021");
   
    this.TenantInformation.push(tempobj);

    let thirdobj:TenantInfo=new TenantInfo;

    thirdobj.Tokan=3;
    thirdobj.ClientID="KFSDF65";
    thirdobj.ClientName="John Muller";
    thirdobj.Enckey=null;
    thirdobj.MAC="AJDOKDL232N";
    thirdobj.Version="1.0.1";
    thirdobj.LicenseMode="Normal";
    thirdobj.CreatedDate=new Date("04-05-2020");
    thirdobj.ExpiryDate= new Date("04-05-2021");

    this.TenantInformation.push(thirdobj);
  }

  ngOnInit() {
  }

}

