import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LicenseInfoComponent } from './license-info/license-info.component';
import { PersonalSiteComponent } from './personal-site/personal-site.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialDesignFrameworkModule } from 'angular6-json-schema-form';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LicenseInfoComponent,
    PersonalSiteComponent,
    MyprofileComponent,
    AngularFormComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MaterialDesignFrameworkModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
