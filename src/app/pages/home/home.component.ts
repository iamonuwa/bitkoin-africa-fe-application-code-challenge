import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent {
	constructor(
		private titleService: Title,
		private metaService: Meta
	) {
		this.titleService.setTitle(`Bitkoin - Homepage`);
		this.metaService.updateTag({name: 'description', content: 'Bitkoin Job Challenge HomePage'});
	}
}
