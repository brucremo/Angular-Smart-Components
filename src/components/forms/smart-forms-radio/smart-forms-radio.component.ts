import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SmartFormsBaseComponent } from '../smart-forms-base/smart-forms-base.component';

@Component({
  selector: 'smart-forms-radio',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  templateUrl: './smart-forms-radio.component.html',
  styleUrls: ['./smart-forms-radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SmartFormsRadioComponent),
    },
  ],
})
export class SmartFormsRadioComponent extends SmartFormsBaseComponent {
  @Input() radios!: SmartFormsRadioConfig[];
  @Input() orientation: "vertical" | "horizontal" = "horizontal";
}

export interface SmartFormsRadioConfig {
  label: string;
  value: any;
}
