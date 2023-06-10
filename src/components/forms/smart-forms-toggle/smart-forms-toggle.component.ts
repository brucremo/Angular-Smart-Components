import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatButtonToggleAppearance,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SmartFormsBaseComponent } from '../smart-forms-base/smart-forms-base.component';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'smart-forms-toggle',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatInputModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
  ],
  templateUrl: './smart-forms-toggle.component.html',
  styleUrls: ['./smart-forms-toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SmartFormsToggleComponent),
    },
  ],
})
export class SmartFormsToggleComponent extends SmartFormsBaseComponent {
  @Input() appearance: MatButtonToggleAppearance = 'standard';
  @Input() multipleSelection: boolean = false;
  @Input() toggles!: SmartFormsToggleConfig[];
}

export interface SmartFormsToggleConfig {
  label: string;
  value: any;
}
