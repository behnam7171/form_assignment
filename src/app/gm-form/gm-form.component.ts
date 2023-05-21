import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {FormHidden, FormType, GmFormModel} from "./gm-form.model";
import {GmFormService} from "./gm-form.service";

@Component({
  selector: 'app-gm-form',
  templateUrl: './gm-form.component.html',
  styleUrls: ['./gm-form.component.scss']
})
export class GmFormComponent implements OnChanges {

  @Input() formData: GmFormModel[] | null = [];
  form!: FormGroup;
  submitted = false;
  FormHidden = FormHidden;
  FormType = FormType;

  constructor(private formService: GmFormService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["formData"] && this.formData) {
      this.form = this.formService.groupControlGenerator(this.formData)
    }
  }

  isFieldInvalid(fieldName: string) {
    const control = this.form.get(fieldName);
    return control?.invalid && (control.dirty || control.touched);
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      console.log('Please fill in all the mandatory fields.');
      return;
    }
    console.log('Form data:', this.form.value);
  }

}
