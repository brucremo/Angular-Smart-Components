import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TextFieldModule } from '@angular/cdk/text-field';
import { SmartFormsBaseComponent } from '../smart-forms-base/smart-forms-base.component';

@Component({
  selector: 'smart-forms-textarea',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatInputModule,
    TextFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './smart-forms-textarea.component.html',
  styleUrls: ['./smart-forms-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SmartFormsTextareaComponent),
    },
  ],
})
export class SmartFormsTextareaComponent extends SmartFormsBaseComponent {
  @Input() enableAutoResize: boolean = false;
  @Input() maxRows: number = 5;
  @Input() minRows: number = 1;
}
