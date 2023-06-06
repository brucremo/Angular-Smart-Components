import { AbstractControl } from "@angular/forms";

export class SmartFormEvent {
    event: unknown;
    formControl: AbstractControl | undefined;
}