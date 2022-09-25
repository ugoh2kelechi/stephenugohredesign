import { Component, OnInit } from '@angular/core';
import data from '../../../data/blocks.json';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.css']
})
export class WhyUsComponent implements OnInit {
  public blocks = data;
  constructor() { }

  ngOnInit(): void {
  }

}
