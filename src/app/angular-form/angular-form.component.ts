import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { tap } from 'rxjs/operators';

export class TabType {
  label: string;
  fields: FormlyFieldConfig[];
  constructor(
     label:string,
     fields:FormlyFieldConfig[]
   ){
     this.label=label;
     this.fields=fields;
   }
}

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})

export class AngularFormComponent {
  form = new FormArray([]);
  model: any;
  options: FormlyFormOptions[];
  tabs: TabType[];
  fields: FormlyFieldConfig[];
  type: string;
  constructor(private http: HttpClient, private formlyJsonschema: FormlyJsonschema) {
    this.loadExample();
  }

  loadExample() {
    this.http.get<any>(`assets/Schema.json`).pipe(
      tap(({ schema, model }) => {
        this.type = "simple";
        this.form = new FormArray(this.tabs.map(() => new FormGroup({})));
        //this.options = new FormlyFormOptions[];//this.tabs.map(() => <FormlyFormOptions>{});
        // this.form = new FormGroup({});
        // this.options = {};
        schema.forEach(element => {
          this.tabs.push(new TabType(element.label,[this.formlyJsonschema.toFieldConfig(element.fields)]));
        });
        //  = [this.formlyJsonschema.toFieldConfig(element.fields)];
        // this.fields = [this.formlyJsonschema.toFieldConfig(schema)];
        this.model = model;
      }),
    ).subscribe();
  }

  submit() {
    var sJson = JSON.stringify(this.form.value);
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
    element.setAttribute('download', "BiotaJsonModel.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }
}
