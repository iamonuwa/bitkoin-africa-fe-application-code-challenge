import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { 
	ContactService,
	EmailValidator
} from '../../shared/index';
@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit{

	private contactForm: FormGroup;

	constructor(
		private titleService: Title,
		private metaService: Meta,
		private contactService: ContactService,
		private formBuilder: FormBuilder
	) {
		this.titleService.setTitle(`Bitkoin - Contact Us`);
		this.metaService.updateTag({name: 'description', content: 'Contact Bitkoin Job Challenge Page'});
	}

	ngOnInit() {
		this.contactForm = this.formBuilder.group({
			fullname: [null, Validators.required],
			email: [null, Validators.required],
			repeat_email: [null, Validators.required],
			message: [null, Validators.required]
		}, {
			validator: EmailValidator.MatchEmail
		})
	}

	submit(formValues) {
		this.contactService.saveContact(formValues);
	}
}