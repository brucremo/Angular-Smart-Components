import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { SmartFormFieldModel } from '../models/smartformfield.model';
import { SmartFormEvent } from '../models/smartformevent.model';

@Component({
  selector: 'smart-forms-base',
  standalone: true,
  template: '',
})
export class SmartFormsBaseComponent implements OnInit, ControlValueAccessor {
  public formGroup!: FormGroup;
  @Input() formControlName!: string;
  @Input() inputTitle!: string;
  @Input() formFieldModel: SmartFormFieldModel = new SmartFormFieldModel();

  @Output('onChange') onChangeEvent: EventEmitter<SmartFormEvent> =
    new EventEmitter<SmartFormEvent>();

  public disabled: boolean = false;
  protected onTouched!: Function;
  protected onChanged!: Function;
  public value: any;

  constructor(public formGroupDirective: FormGroupDirective) {
    if (!this.formFieldModel) {
      this.formFieldModel = {
        hideTooltip: true,
        placeholder: this.inputTitle,
        tooltip: this.inputTitle,
        tooltipPosition: 'left',
      };
    }
  }

  // --- Getters ---
  get formControl(): AbstractControl {
    return this.formGroup.controls[this.formControlName];
  }

  // --- ControlValueAccessor Implementation ---
  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // --- OnInit Implementation ---
  ngOnInit(): void {
    this.formGroup = this.formGroupDirective.control;
  }

  // --- Event Handling ---
  public onChange(event: unknown): void {
    this.onChangeEvent.emit({
      event: event,
      formControl: this.formGroup?.controls[this.formControlName],
    });
  }
}
