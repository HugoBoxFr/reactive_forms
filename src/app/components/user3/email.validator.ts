import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    
    const emailRegex = RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');
    const valid = emailRegex.test(control.value);

    const errors = {
        email: {
            rules: 'doit être de type mail'
        }
    };

    return !valid ? errors : null;
}