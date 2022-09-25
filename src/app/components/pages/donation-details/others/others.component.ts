import { Component } from '@angular/core';
import { DonationHelperService } from 'src/app/components/services/donation-helper.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent extends DonationHelperService {
  settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    prevArrow: '.sigma_related-posts .slider-prev',
    nextArrow: '.sigma_related-posts .slider-next',
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  }
}
