import { AbstractControl } from '@angular/forms';

export class EmailValidator {
	static MatchEmail(AC: AbstractControl) {
       const email = AC.get('email').value; // to get value in input tag
       const repeat_email = AC.get('repeat_email').value; // to get value in input tag
        if(email != repeat_email) {
            AC.get('repeat_email').setErrors( {MatchEmail: true} )
        } else {
            return null;
        }
    }
}