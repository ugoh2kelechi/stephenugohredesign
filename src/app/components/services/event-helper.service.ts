import { AfterViewInit, AfterContentInit, Injectable, OnInit, Directive } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import events from '../data/events/event.json';
import authors from '../data/team.json';
import category from '../data/events/category.json';
import { Category } from './filter/category';
import { Item } from './filter/item';

@Injectable({
  providedIn: 'root'
})
@Directive()
export class EventHelperService implements AfterContentInit, AfterViewInit,OnInit {

 // pagination
 page: number = 1;
 public eventblock = events;
 public category = category;
 public eventdetails = events;

 public activeItem: number;
 constructor(private router: ActivatedRoute) {
   this.activeItem = 1;
 }
 // category
 public getCategories(items: any[]) {
   var elems = category.filter((item: { id: number; }) => {
     return items.includes(item.id)
   });
   return elems;
 }
 // Author
 public getAuthor(items: any[]) {
   var elems = authors.filter((item: { id: number; }) => {
     return items.includes(item.id)
   });
   return elems;
 }
 public setPost(id: any) {
   this.eventdetails = events.filter((item: { id: any; }) => { return item.id == id });
 }
 ngAfterContentInit(): void {
   this.setPost(this.router.snapshot.params.id);
 }
 ngAfterViewInit(): void {
   
 }
 ngOnInit(): void{
   
 }
 // Filter
 items: Item[] = events;
 categories: Category[] = category;
 filteredItems: Item[] | Item[] = [] = [...this.items];
 filterItemsByCategory(category: Category, id: number) {
   this.filteredItems = this.items.filter((item: Item) => {
     return item.category.includes(category.id);
   });
   this.activeItem = id
 }
 reset(id: number) {
   this.filteredItems = [...this.items];
   this.activeItem = id
 }
}
