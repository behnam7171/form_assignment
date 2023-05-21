import {NgModule} from "@angular/core";
import {AppComponent} from "../app.component";
import {GmFormComponent} from "./gm-form.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {GmFormService} from "./gm-form.service";
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    GmFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule
  ],
  providers: [GmFormService],
  exports: [
    GmFormComponent
  ],
  bootstrap: [AppComponent]
})
export class GmFormModule { }
