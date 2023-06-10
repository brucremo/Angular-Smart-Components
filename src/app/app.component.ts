import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SmartFormsInputComponent } from 'src/components/forms/smart-forms-input/smart-forms-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SmartFormsSelectComponent } from 'src/components/forms/smart-forms-select/smart-forms-select.component';
import { SmartFormsDatepickerComponent } from 'src/components/forms/smart-forms-datepicker/smart-forms-datepicker.component';
import { SmartFormsToggleComponent, SmartFormsToggleConfig } from 'src/components/forms/smart-forms-toggle/smart-forms-toggle.component';
import { SmartFormsRadioComponent, SmartFormsRadioConfig } from 'src/components/forms/smart-forms-radio/smart-forms-radio.component';
import { SmartFormsQuantityPickerComponent } from 'src/components/forms/smart-forms-quantity-picker/smart-forms-quantity-picker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    SmartFormsInputComponent,
    SmartFormsSelectComponent,
    SmartFormsToggleComponent,
    SmartFormsRadioComponent,
    SmartFormsDatepickerComponent,
    SmartFormsQuantityPickerComponent,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Smart-Components';

  selectOptions: any[] = [
    {
      value: null,
      view: "null"
    },
    {
      value: 1,
      view: 'One',
    },
    {
      value: 2,
      view: 'Two',
    },
  ];

  formGroup: FormGroup = new FormGroup({
    input: new FormControl(null, Validators.compose([Validators.required])),
    select: new FormControl(null, Validators.compose([Validators.required])),
    datepicker: new FormControl(null, Validators.compose([Validators.required])),
    toggle: new FormControl(null, Validators.compose([Validators.required])),
    radio: new FormControl(null),
    qty: new FormControl(null, Validators.compose([Validators.min(1)])),
  });

  toggles: SmartFormsToggleConfig[] = [
    {
      label: "Test",
      value: 1
    },
    {
      label: "Test2",
      value: 2
    },
    {
      label: "Test3",
      value: 3
    },
  ];

  radios: SmartFormsRadioConfig[] = [
    {
      label: "Test",
      value: 1
    },
    {
      label: "Test2",
      value: 2
    },
    {
      label: "Test3",
      value: 3
    },
  ];
}
