import { Component, Input, OnInit } from '@angular/core';
import data from '../../data/shop/shop.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public shop = data;
  @Input() layout: number | string | undefined;
  @Input() logo: number | string | undefined;
  ngOnInit(): void {

  }

}
