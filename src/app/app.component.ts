import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(
		private metaService: Meta
		) {
		this.metaService.updateTag({name: 'description', content : 'This application is built with angular4. It is server side rendered using angular universal. This is my solution to the Bitkoin Job Challenge. It has 3 basic pages, homepage, about and contact.'});
	    this.metaService.addTag({ name: 'mobile-web-app-capable', content: 'yes'});
	    this.metaService.addTag({ name: 'application-name', content: 'Bitkoin'});
	    this.metaService.addTag({ name: 'apple-mobile-web-app-capable', content: 'yes'});
	    this.metaService.addTag({ name: 'apple-mobile-web-app-status-bar-style', content: 'black'});
	    this.metaService.addTag({ name: 'apple-mobile-web-app-title', content: 'Bitkoin'});
	    this.metaService.addTag({ name: 'msapplication-TileColor', content: '#2F3BA2'});
	    this.metaService.addTag({ name: 'theme-color', content: '#2F3BA2'});
	}
}
