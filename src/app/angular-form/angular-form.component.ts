import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit {
  jsonFormOptions = {
    loadExternalAssets: false
  };
  schema = {
    type: "object",
      properties: {
        GrandfatherName: {
          type: "object",
          properties: {
            english: { type: "string" },
            marathi: { type: "string" }
          }
        }
      }
  };

  layout = ["*"];

  

  submittedFormData;
  ngOnInit() {
    console.log("hello");
  }

  onSubmit(data: any) {
    this.submittedFormData = data;
      var sJson = JSON.stringify(data);     var element = document.createElement('a');     element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));     element.setAttribute('download', "primer-server-task.json");     element.style.display = 'none';     document.body.appendChild(element);     element.click(); // simulate click     document.body.removeChild(element);
  }

  showFormSchemaFn($event) {
    console.log($event);
  }

  showFormLayoutFn($event) {
    console.log($event);
  }
}
