import { AfterViewInit, OnInit, Injectable, HostListener } from '@angular/core';
import $ from 'jquery';
import 'magnific-popup';

@Injectable({
  providedIn: 'root'
})
export class HelperService implements OnInit, AfterViewInit {
  constructor() { }
  // Sticky Nav
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(_e: any) {
    if (window.pageYOffset > 100) {
      let element = <HTMLElement>document.getElementById('can-sticky');
      element.classList.add('sticky');
    } else {
      let element = <HTMLElement>document.getElementById('can-sticky');
      element.classList.remove('sticky');
    }
  }
  // Navigation
  navmethod: boolean = true;
  toggleNav() {
    this.navmethod = !this.navmethod;
  }
  // Mobile 
  open: boolean = false;
  trigger(item: { open: boolean; }) {
    item.open = !item.open;
  }
  // Sidebar
  canvasmethod: boolean = true;
  canvasToggle() {
    this.canvasmethod = !this.canvasmethod;
  }
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    ($('.popup-youtube') as any).magnificPopup({
      type: 'iframe'
    });
    ($('.gallery-thumb') as any).magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
      mainClass: 'mfp-fade',
    });
  }
}
