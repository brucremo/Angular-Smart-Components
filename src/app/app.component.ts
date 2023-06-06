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
    SmartFormsDatepickerComponent,
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
  });
}
