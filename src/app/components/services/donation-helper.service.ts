import { AfterViewInit, AfterContentInit, Injectable, OnInit, Directive } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import donation from '../data/donations/donation.json';

@Injectable({
  providedIn: 'root'
})
@Directive()
export class DonationHelperService implements AfterContentInit, AfterViewInit, OnInit {
  // pagination
  page: number = 1;
  public donationblock = donation;
  public donationdetails = donation;
  constructor(private router: ActivatedRoute) {}
  public setPost(id: any) {
    this.donationdetails = donation.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setPost(this.router.snapshot.params.id);
  }
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void{
    
  }
  // Social Share
  public pageUrl = window.location.href;
  public socialShare(title: string) {
    var socialIcons = [
      {
        title: "facebook",
        iconClass: "fab fa-facebook-f",
        link: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.pageUrl) + ""
      },
      {
        title: "twitter",
        iconClass: "fab fa-twitter",
        link: "http://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "&" + encodeURIComponent(this.pageUrl) + ""
      },
      {
        title: "linkedin",
        iconClass: "fab fa-linkedin-in",
        link: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(this.pageUrl) + "&title=" + encodeURIComponent(title) + ""
      },
      {
        title: "pinterest",
        iconClass: "fab fa-pinterest-p",
        link: "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(this.pageUrl) + ""
      }
    ];
    return socialIcons;
  } 
  openSocialPopup(social: any){
    window.open(social.link, "MsgWindow", "width=600,height=600")
  }
}
