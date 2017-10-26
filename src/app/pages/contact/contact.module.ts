import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';

import { ContactService } from '../../shared/index';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
  	ReactiveFormsModule,
	  ContactRoutingModule
  ],
  providers: [
  	ContactService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ContactModule { }
