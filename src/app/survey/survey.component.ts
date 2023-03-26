import { Component } from '@angular/core';
interface City {
  name: string;
}
interface Job {
  job: string;
}
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent {
  cities: City[] = [];
  jobs: Job[] = [];
  gender: any;
  ngOnInit() {
    this.cities = [
      { name: '台灣'},
      { name: '馬來西亞'},
      { name: '倫敦'},
      { name: '美國'},
      { name: '巴黎'},
      { name: '墨西哥'},
      { name: '俄羅斯'},
      { name: '越南'},
      { name: '緬甸'},
      { name: '日本'},
      { name: '菲律賓'},
    ];
    this.jobs = [
      { job: '學生'},
      { job: '教師'},
      { job: '軍公教'},
      { job: '商'},
      { job: '公務人員'},
      { job: '工'},
      { job: '農'},
      { job: '醫療'},
      { job: '服務業'},
      { job: '退休'},
    ]
  }
}
