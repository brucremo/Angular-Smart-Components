import { AbstractControl, Validators } from '@angular/forms';

export {};

const LETTERS_REGEXP = new RegExp('^[a-zA-Z]*$');
const LETTERSNUMBERS_REGEXP = new RegExp('^[a-zA-Z0-9]*$');
const DOUBLE_REGEXP = new RegExp('^-?[0-9]+(.[0-9]+)?$');
const INTEGER_REGEXP = new RegExp('^-?[0-9]*$');

export class SmartValidators {
  /**
   * Validator that requires the control's value to pass a letter/number validation test.
   */
  static lettersnumbers = function (control: AbstractControl): {
    [key: string]: boolean;
  } | null {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    return LETTERSNUMBERS_REGEXP.test(control.value)
      ? null
      : { lettersnumbers: true };
  };

  /**
   * Validator that requires the control's value to pass a double numeric value validation test.
   */
  static double = function (control: AbstractControl): {
    [key: string]: boolean;
  } | null {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    return DOUBLE_REGEXP.test(control.value) ? null : { double: true };
  };

  /**
   * Validator that requires the control's value to pass an integer numeric value validation test.
   */
  static integer = function (control: AbstractControl): {
    [key: string]: boolean;
  } | null {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    return INTEGER_REGEXP.test(control.value) ? null : { integer: true };
  };

  /**
   * Validator that requires the control's value to pass a boolean value validation test.
   */
  static boolean = function (control: AbstractControl): {
    [key: string]: boolean;
  } | null {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    return typeof control.value === 'boolean' ||
      ['true', 'false'].includes(control.value.toString().toLowerCase())
      ? null
      : { integer: true };
  };

  /**
   * Validator that requires the control's value to pass a letter validation test.
   */
  static letters = function (control: AbstractControl): {
    [key: string]: boolean;
  } | null {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    return LETTERS_REGEXP.test(control.value) ? null : { letters: true };
  };
}

// From https://github.com/angular/angular/blob/main/packages/forms/src/validators.ts
// Lines 18 to 26
function isEmptyInputValue(value: any): boolean {
  return (
    value == null ||
    ((typeof value === 'string' || Array.isArray(value)) && value.length === 0)
  );
}
