import { AbstractControl } from "@angular/forms";

export { }

declare module '@angular/forms' {
    interface AbstractControl {
        getDataType: () => string | null;
        isTouchedAndHasRequiredErrors: () => boolean;
    }
}

AbstractControl.prototype.getDataType = function (): string | null {
    let nativeTypes: string[] = ["string", "number", "boolean"];

    let type: string = typeof this.value;

    if (nativeTypes.includes(type)) {
        return type;
    }

    if (Object.prototype.toString.call(this.value) == "[object Date]") {
        return "Date";
    }

    return null;
};

AbstractControl.prototype.isTouchedAndHasRequiredErrors = function (): boolean {
    return this.touched && this.errors?.['required'];
};