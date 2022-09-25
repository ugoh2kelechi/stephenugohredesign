import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';


@NgModule({
  declarations: [EventsComponent, ContentComponent, GetQuoteComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule
  ]
})
export class EventsModule { }
