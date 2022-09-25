import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { CountUpModule } from 'ngx-countup';

import { HomeV2RoutingModule } from './home-v2-routing.module';
import { HomeV2Component } from './home-v2.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { TeamComponent } from './team/team.component';
import { ProcessComponent } from './process/process.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { VideoComponent } from './video/video.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { EventsComponent } from './events/events.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [HomeV2Component, BannerComponent, AboutTextComponent, ServicesComponent, PricingComponent, GetQuoteComponent, TeamComponent, ProcessComponent, BlogPostComponent, VideoComponent, WhyUsComponent, EventsComponent, CounterComponent],
  imports: [
    CommonModule,
    HomeV2RoutingModule,
    SharedModule,
    FormsModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule
  ]
})
export class HomeV2Module { }
