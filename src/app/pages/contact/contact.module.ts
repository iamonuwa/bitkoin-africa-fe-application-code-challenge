import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
	  ContactRoutingModule
  ],
  providers: [],
})
export class ContactModule { }
