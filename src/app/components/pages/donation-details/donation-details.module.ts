import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { DonationDetailsRoutingModule } from './donation-details-routing.module';
import { DonationDetailsComponent } from './donation-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { DonationFormComponent } from './donation-form/donation-form.component';
import { OthersComponent } from './others/others.component';
import { DonorsComponent } from './donors/donors.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [DonationDetailsComponent, ContentComponent, DonationFormComponent, OthersComponent, DonorsComponent, GalleryComponent],
  imports: [
    CommonModule,
    DonationDetailsRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule,
    SlickCarouselModule
  ]
})
export class DonationDetailsModule { }
