import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import {
  PageService,
  PageSettingsModel,
} from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.data = sampleData;
    this.pageSettings = { pageSize: 6 };
  }
  public data!: Object[];

  pageSettings!: PageSettingsModel;
}
