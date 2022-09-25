import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShopDetailsRoutingModule } from './shop-details-routing.module';
import { ShopDetailsComponent } from './shop-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [ShopDetailsComponent, ContentComponent],
  imports: [
    CommonModule,
    ShopDetailsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ShopDetailsModule { }
