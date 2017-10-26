import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class ContactService {
	
	saveContact(form) {
		// window.localStorage.setItem('contact', JSON.stringify(form));
	}
}