import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { DonationsRoutingModule } from './donations-routing.module';
import { DonationsComponent } from './donations.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [DonationsComponent, ContentComponent],
  imports: [
    CommonModule,
    DonationsRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class DonationsModule { }
