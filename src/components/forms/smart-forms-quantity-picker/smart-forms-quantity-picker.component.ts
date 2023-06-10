import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SmartFormsBaseComponent } from '../smart-forms-base/smart-forms-base.component';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'smart-forms-quantity-picker',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTooltipModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './smart-forms-quantity-picker.component.html',
  styleUrls: ['./smart-forms-quantity-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SmartFormsQuantityPickerComponent),
    },
  ],
})
export class SmartFormsQuantityPickerComponent extends SmartFormsBaseComponent {
  public quantity: number = 0;

  public onInputChange(value: number): void {
    this.quantity += value;
    this.formControl.setValue(this.quantity);
    this.formControl.updateValueAndValidity();
  }
}
