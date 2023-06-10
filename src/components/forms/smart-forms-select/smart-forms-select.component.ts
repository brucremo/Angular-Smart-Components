import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SmartFormsBaseComponent } from '../smart-forms-base/smart-forms-base.component';

@Component({
  selector: 'smart-forms-select',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './smart-forms-select.component.html',
  styleUrls: ['./smart-forms-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SmartFormsSelectComponent),
    },
  ],
})
export class SmartFormsSelectComponent extends SmartFormsBaseComponent {
  @Input() valueProperty!: string;
  @Input() viewProperty!: string;
  @Input() selectOptions!: any[];
}
