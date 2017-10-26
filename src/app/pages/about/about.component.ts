import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})

export class AboutComponent {

	constructor(
		private titleService: Title,
		private metaService: Meta
		) {
		this.titleService.setTitle(`Bitkoin - About Us`);
		this.metaService.updateTag({name: 'description', content: 'About Bitkoin Job Challenge Page'});
	}


}