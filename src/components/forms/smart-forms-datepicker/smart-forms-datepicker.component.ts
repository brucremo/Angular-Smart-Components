import { Component, forwardRef, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  FormGroupDirective,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SmartFormsBaseComponent } from '../smart-forms-base/smart-forms-base.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'smart-forms-datepicker',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatLuxonDateModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './smart-forms-datepicker.component.html',
  styleUrls: ['./smart-forms-datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SmartFormsDatepickerComponent),
    },
  ],
})
export class SmartFormsDatepickerComponent extends SmartFormsBaseComponent {
  @Input() dateLocale: string = 'en-CA';
  @Input() toggleIcon: string = 'calendar_month';
  @Input() useTouchUi: boolean = false;

  constructor(
    private adapter: DateAdapter<any>,
    public formDirective: FormGroupDirective,
    @Inject(MAT_DATE_LOCALE) private locale: string
  ) {
    super(formDirective);

    this.locale = this.dateLocale;
    this.adapter.setLocale(this.locale);
  }
}
