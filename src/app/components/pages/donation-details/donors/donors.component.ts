import { Component, OnInit } from '@angular/core';
import data from '../../../data/donations/donors.json';
import donor from '../../../data/team.json';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {
  public donors = data;
  constructor() { }
  public getDonor(items: string | any[]) {
    var elems = donor.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  ngOnInit(): void {
  }

}
