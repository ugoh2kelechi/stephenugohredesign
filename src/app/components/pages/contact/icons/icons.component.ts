import { Component, OnInit } from '@angular/core';
import data from '../../../data/contacticons.json'

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor() { }
  public icons = data;

  ngOnInit(): void {
  }

}
