import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';

import { ContactService } from '../../shared/index';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
	ContactRoutingModule
  ],
  providers: [
  	ContactService
  ],
})
export class ContactModule { }
