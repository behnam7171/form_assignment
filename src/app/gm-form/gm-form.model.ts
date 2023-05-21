export interface GmFormModel {
  field: GmFormFields,
  label: string,
  type: FormType,
  hidden: FormHidden,
  mandatory: boolean
}

export enum GmFormFields {
  email = "email",
  name = "name",
  confirm = "confirm",
  hiddenField = "hiddenField"
}

export enum FormType {
  text = "text",
  check = "check"
}

// based on json provided. I do not agree with string form of true and false
export enum FormHidden {
  false = "false",
  true = "true"
}


