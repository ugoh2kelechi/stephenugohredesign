import { Component } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import data from '../../data/navigation.json';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent extends HelperService {
  public navigation = data;
  constructor(public helperService: HelperService) {
    super();
  }

}
