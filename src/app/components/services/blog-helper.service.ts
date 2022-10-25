import { Injectable, AfterContentInit, OnInit, Directive } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import authors from '../data/team.json';
import blog from '../data/blog/blog.json';
import blogcategory from '../data/blog/blogcategory.json';
import blogtags from '../data/blog/blogtags.json';

@Injectable({
  providedIn: 'root'
})
@Directive()
export class BlogHelperService implements AfterContentInit, OnInit {

  // pagination
  page: number = 1;
  public blogpost = blog;
  public blogdetails = blog;
  public category = blogcategory;
  public blogcategory = blogcategory;
  public tags = blogtags;
  public blogtags = blogtags;
  public author = authors;
  public searchText: string;
  public searchQuery: string;
  constructor(private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.searchText = '';
    this.searchQuery = '';
  }
  // category
  public getCategories(items: any[]) {
    var elems = blogcategory.filter((item: { id: number; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Tags
  public getTags(items: any[]) {
    var elems = blogtags.filter((item: { id: number; }) => {
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
  // Count Category
  public setCategoriesCount() {
    // for (var i = 0; i < this.blogcategory.length; i++) {
    //   var count = this.blogpost.filter((post: { category: number[]; }) => { return post.category.includes(parseInt(this.blogcategory[i].id)) });
    //   count = count.length;
    //   this.blogcategory[i].count = count;
    // }
  }
  // Related post
  public getPostByCategory(items: string | any[]) {
    var elems = blog.filter((post: { id: number; category: any[]; }) => { return post.id !== parseInt(this.route.snapshot.params.id) && post.category.some(r => items.includes(r)) });
    return elems;
  }
  // Get Date for Grid
  public getInitialDate(string: string) {
    var names = string.split(' '),
      initials = '<span>' + names[0].substring(0, 2).toString().replace(/\D/g, "") + '</span>';
    if (names.length > 1) {
      initials += '<span> ' + names[names.length - 2].substring(0, 3).toString() + '</span>';
    }
    return initials;
  }
  // Get Date for List
  public getInitialListDate(string: string) {
    var names = string.split(' '),
      initials = '<span>' + names[0].substring(0, 2).toString().replace(/\D/g, "") + '/</span>';
    if (names.length > 1) {
      initials += '<span>' + names[names.length - 2].substring(0, 3).toString() + '</span>';
    }
    return initials;
  }
  // Search Filter
  onSubmit() {
    if (this.searchText === "") {
      return;
    } else {
      this.router.navigate(['blog/search', this.searchText]);
    }
  }
  // Filter
  // Category Filter
  public setCategory(id: any) {
    this.blogcategory = id;
  }
  public getCategory() {
    return this.blogcategory;
  }
  public getPostsByCategory(catId: string) {
    return this.blogpost = blog.filter((item: { category: number[]; }) => { return item.category.includes(parseInt(catId)) });
  }
  // Tag Filter
  public setTag(id: any) {
    this.blogtags = id;
  }
  public getTag() {
    return this.blogtags;
  }
  public getPostsByTags(tagId: string) {
    return this.blogpost = blog.filter((item: { tags: number[]; }) => { return item.tags.includes(parseInt(tagId)) });
  }
  // Author Filter
  public setAuthor(id: any) {
    this.author = id;
  }
  public getAuthorPost() {
    return this.author;
  }
  public getPostsByAuthors(userId: string) {
    return this.blogpost = blog.filter((item: { author: number[]; }) => { return item.author.includes(parseInt(userId)) });
  }
  // Search Filter
  public setSearch(query: string) {
    this.searchQuery = query;
  }
  public getSearch() {
    return this.searchQuery;
  }
  public getPostsBySearch(query: string) {
    return this.blogpost = blog.filter((item: { title: (string) }) => {
      return item.title.toLowerCase().includes(query.toLowerCase())
    });
  }
  // Fetch All filter
  public setPosts() {
    // var postsByCategory = this.getCategory() != undefined ? this.getPostsByCategory(this.getCategory()) : '',
    //   postsByTags = this.getTag() != undefined ? this.getPostsByTags(this.getTag()) : '',
    //   postsByAuthor = this.getAuthorPost() != undefined ? this.getPostsByAuthors(this.getAuthorPost()) : '',
    //   postsBySearch = this.getSearch() != undefined ? this.getPostsBySearch(this.getSearch()) : '';

    // if ((postsByCategory != '' || postsByCategory != undefined || postsByCategory != null) && postsByCategory.length > 0) {
    //   this.blogpost = postsByCategory;
    // } else if ((postsByTags != '' || postsByTags != undefined || postsByTags != null) && postsByTags.length > 0) {
    //   this.blogpost = postsByTags;
    // } else if ((postsByAuthor != '' || postsByAuthor != undefined || postsByAuthor != null) && postsByAuthor.length > 0) {
    //   this.blogpost = postsByAuthor;
    // } else if ((postsBySearch != '' || postsBySearch != undefined || postsBySearch != null) && postsBySearch.length > 0) {
    //   this.blogpost = postsBySearch;
    // }
  }
  // Post Details
  public setPost(id: any) {
    this.blogdetails = blog.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setCategory(this.route.snapshot.params.catId);
    this.setTag(this.route.snapshot.params.tagId);
    this.setAuthor(this.route.snapshot.params.userId);
    this.setSearch(this.route.snapshot.params.query);
    this.setPosts();
    this.setPost(this.route.snapshot.params.id);
  }
  // Post Navigation
  public postnavigation(items: string | any[], index: number) {
    var output = [],
      id, item;
    if (items[index - 1] !== undefined && index - 1 !== -1) {
      item = items[index - 1];
      id = item.id;
      // Show the previous button 
      output.push("<a href='/blog-details/" + item.id + "' class='sigma_single-pagination-item pagination-prev'> <span>Previous Post</span><h6>" + item.title.slice(0, 20) + "</h6> </a>");
    }
    if (items[index + 1] !== undefined && index <= items.length - 1) {
      // Show next button 
      item = items[index + 1];
      id = item.id;
      output.push("<a href='/blog-details/" + item.id + "' class='sigma_single-pagination-item pagination-next'> <span>Next Post</span><h6>" + item.title.slice(0, 20) + "</h6> </a>");
    }

    return output;
  }
  // sanitize url
  public sanitnizeAudioURL(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
  // Recent post
  public changeToMonth(month: string | number | any) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
  }

  public setDemoDate() {
    // var today = new Date();
    // this.blogpost.slice(0, 3).map((post: { timestamp: number; postdate: string; }) => (
    //   post.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000),
    //   // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
    //   // in the blog.json object
    //   post.postdate = `${today.getDate() - 2} ${this.changeToMonth(today.getMonth())}, ${today.getFullYear()}`
    // ));
  }

  public recentPost() {
    // var elems = blog.filter((post: { timestamp: number | any; postdate: string | number | Date; }) => {
    //   return post.timestamp < new Date(post.postdate);
    // });
    // return elems;
  }

  ngOnInit(): void {
    this.setCategoriesCount();
    this.setDemoDate();
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

