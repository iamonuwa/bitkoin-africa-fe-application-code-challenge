import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';

import { LocalStore } from '../../shared/index';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
	ContactRoutingModule
  ],
  providers: [
  	LocalStore
  ],
})
export class ContactModule { }
