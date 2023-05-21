import {GmFormFields, GmFormModel} from "./gm-form.model";
import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable()
export class GmFormService {

  constructor(private formBuilder: FormBuilder) {
  }

  groupControlGenerator(formData: GmFormModel[]): FormGroup {
    const controls: any = {}
    const form = this.formBuilder.group({});
    formData.forEach(field => {
      const validators = this.addValidators(field)
      form.addControl(field.field, this.formBuilder.control('', {validators: validators, updateOn: "blur"}));
    });
    return form;
  }

  addValidators(fieldData: GmFormModel): ValidatorFn[] {
    let validators: ValidatorFn[] = [];
    if (fieldData.mandatory) {
      validators.push(Validators.required)
    }
    switch (fieldData.field) {
      case GmFormFields.name:
        break;
      case GmFormFields.confirm:
        break;
      case GmFormFields.email:
        validators = [...validators, ...[Validators.email]]
        break;
      case GmFormFields.hiddenField:
        break;
    }

    return validators
  }
}
