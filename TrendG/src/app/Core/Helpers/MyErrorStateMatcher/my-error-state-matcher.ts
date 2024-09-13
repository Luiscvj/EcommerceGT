import { AbstractControl, FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control?.invalid && (control.dirty || control.touched || isSubmitted))
        /*
         ?Se usa doble !! para asegurar que a pesar de que hay un null o indefinido envie un booleano
        */
    }

}
