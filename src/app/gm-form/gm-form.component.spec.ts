import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmFormComponent } from './gm-form.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('GmFormComponent', () => {
  let component: GmFormComponent;
  let fixture: ComponentFixture<GmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ GmFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmFormComponent);
    component = fixture.componentInstance;
    component.formData = [
      {
        "field": "name",
        "label": "Name",
        "type": "text",
        "hidden": "false",
        "mandatory": true
      },
      {
        "field": "email",
        "label": "Email",
        "type": "text",
        "hidden": "false",
        "mandatory": true
      },
      {
        "field": "confirm",
        "label": "Checkbox with confirmation",
        "type": "check",
        "hidden": "false"
      },
      {
        "field": "hiddenField",
        "label": "",
        "type": "text",
        "hidden": "true",
        "mandatory": false
      }
    ]
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the form fields', () => {
    const compiled = fixture.nativeElement;
    const inputElements = compiled.querySelectorAll('input');
    expect(inputElements.length).toBe(2); // Two visible fields: 'name' and 'email'
  });

  it('should validate mandatory fields', () => {
    const nameControl = component.form.controls['name'];
    const emailControl = component.form.controls['email'];

    expect(nameControl.valid).toBeFalsy();
    expect(emailControl.valid).toBeFalsy();

    nameControl.setValue('John Doe');
    emailControl.setValue('john@example.com');

    expect(nameControl.valid).toBeTruthy();
    expect(emailControl.valid).toBeTruthy();
  });

  it('should hide the hidden field', () => {
    const compiled = fixture.nativeElement;
    const hiddenField = compiled.querySelector('#hiddenField');
    expect(hiddenField).toBeNull();
  });

  it('should log form data on submit', () => {
    spyOn(console, 'log');
    component.form.patchValue({
      name: 'John Doe',
      email: 'john@example.com',
      confirm: true
    });
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith('Form data:', {
      name: 'John Doe',
      email: 'john@example.com',
      confirm: true
    });
  });
});
