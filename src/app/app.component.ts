import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {GmFormModel} from "./gm-form/gm-form.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'Germedica';
  formData!: Observable<GmFormModel[]>;

  constructor(private http: HttpClient) {
  }


  ngOnInit() {
    this.formData = this.http.get<GmFormModel[]>('assets/to-render.json');
  }
}
