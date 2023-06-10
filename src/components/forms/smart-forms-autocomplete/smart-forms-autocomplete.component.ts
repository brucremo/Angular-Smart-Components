import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SmartFormsBaseComponent } from '../smart-forms-base/smart-forms-base.component';
import { map, Observable } from 'rxjs';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'smart-forms-autocomplete',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './smart-forms-autocomplete.component.html',
  styleUrls: ['./smart-forms-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SmartFormsAutocompleteComponent),
    },
  ],
})
export class SmartFormsAutocompleteComponent
  extends SmartFormsBaseComponent
  implements OnInit
{
  @Input() valueProperty!: string;
  @Input() viewProperty!: string;
  @Input() selectOptions: SmartFormsAutocompleteConfig[] = [];

  public filteredOptions!: Observable<string[]>;

  public override ngOnInit(): void {
    super.ngOnInit();
    this.filteredOptions = this.formGroup.controls[
      this.formControlName
    ].valueChanges.pipe(map((value) => this.filterOnValueChanges(value)));
  }

  private filterOnValueChanges(value: string): string[] {
    let filterValue: string = value.toLowerCase();

    return this.selectOptions
      .map((x) => x.label)
      .filter((option) => option.toLowerCase().includes(filterValue));
  }
}

export interface SmartFormsAutocompleteConfig {
  label: string;
  value: any;
}
