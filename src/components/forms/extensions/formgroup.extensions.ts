import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { DateTime } from 'luxon';
import { formErrorMessage } from '../constants/formgroup.constants';
import './abstractcontrol.extensions'  
import './string.extensions'  

export {};

declare module '@angular/forms' {
  interface FormGroup {
    getFormControlErrors: (
      formControlName: string,
      formControlTitle: string
    ) => string | null;
  }
}

FormGroup.prototype.getFormControlErrors = function (
  formControlName: string,
  formControlTitle: string,
  dateFormat: string = 'yyyy/MM/dd'
): string | null {
  if (!this.controls) {
    return null;
  } else {
    let formControl: AbstractControl = this.controls[formControlName];

    // Check for required/empty values first before further error checks
    if (
      formControl.isTouchedAndHasRequiredErrors()
    ) {
      return `${formControlTitle} ${formErrorMessage['required']}`;
    }

    if (!formControl.valid) {
      // Get all error messages from formErrorMessage constants
      Object.getOwnPropertyNames(formErrorMessage).forEach((prop) => {
        let formErrors: ValidationErrors = formControl.errors!;

        let validationValueText: string = '';

        if(~formErrors || !formErrors[prop]){
          return null;
        }

        switch (prop) {
          case 'minLength':
            validationValueText = `${formErrors['minLength'].requiredLength} characters`;
            break;
          case 'maxLength':
            validationValueText = `${formErrors['maxLength'].requiredLength} characters`;
            break;
          case 'matDatepickerMin':
            validationValueText = `${formatAbstractControlDate(
              formErrors['matDatepickerMin'].min,
              dateFormat
            )}`;
            break;
          case 'matDatepickerMax':
            validationValueText = `${formatAbstractControlDate(
              formErrors['matDatepickerMax'].max,
              dateFormat
            )}`;
            break;
          default:
            validationValueText = `${formErrors[prop][prop] || ''}`;
            break;
        }

        return `${formControlTitle} ${formErrorMessage[prop]} ${validationValueText}`;
      });
    }

    return '';
  }
};

const formatAbstractControlDate = function (
  date: string | Date,
  format: string
): string {
  let dateValue: string =
    Object.prototype.toString.call(date) == '[object Date]'
      ? (date as Date).toString()
      : (date as string);

  return DateTime.fromISO(dateValue).toFormat(format);
};
