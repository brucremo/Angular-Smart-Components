import { Component, forwardRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { SmartFormsBaseComponent } from '../smart-forms-base/smart-forms-base.component';
import '../extensions/formgroup.extensions';

@Component({
  selector: 'smart-forms-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './smart-forms-input.component.html',
  styleUrls: ['./smart-forms-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SmartFormsInputComponent),
    },
  ],
})
export class SmartFormsInputComponent extends SmartFormsBaseComponent {}
