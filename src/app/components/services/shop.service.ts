import { AfterViewInit, AfterContentInit, Injectable, OnInit, Directive } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../models/product';
import productblock from '../data/shop/shop.json';
import productcategory from '../data/shop/category.json';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import author from '../data/team.json';

@Injectable({
  providedIn: 'root'
})
@Directive()
export class ShopService extends ProductService implements AfterContentInit, AfterViewInit, OnInit {
  closeResult: string | undefined;
  modalContent: any;
  // pagination
  page: number = 1;
  shopblock: Product[] = [];
  public category = productcategory;
  public block = productblock;
  public productcategory = productcategory;
  public productblock = productblock;
  public shopdetails = productblock;
  public wishlistlength: number | undefined;
  public cartlength: number | undefined;
  // Search
  public searchText: string;
  public searchQuery: string;
  constructor(
    private modalService: NgbModal,
    private productService: ProductService,
    private router: ActivatedRoute,
    private route: Router
  ) {
    super();
    this.searchText = '';
    this.searchQuery = '';
  }
  open(content: any, item: any) {
    this.modalContent = item
    this.modalService.open(content, { centered: true, size: 'lg', windowClass: 'quick-view-modal' });
  }
  // Increment decrement
  public counter: number = 1;
  increment() {
    this.counter += 1;
  }
  decrement() {
    this.counter > 1 ? this.counter -= 1 : 1;
  }
  // Category
  public getCategories(items: string | any[]) {
    var elems = productcategory.filter((item: { id: number; }) => {
      return items.includes("item.id")
    });
    return elems;
  }
  // Author
  public getAuthor(items: string | any[]) {
    var elems = author.filter((item: { id: number; }) => {
      return items.includes("item.id")
    });
    return elems;
  }
  // Category Filter
  public setCategory(id: number) {
    this.productcategory[0].id = id;
  }
  public getCategory() {
    return this.productcategory;
  }
  public getPostsByCategory(catId: string) {
    var sb = productblock.filter((item: { category: number[]; }) => {
      return item.category.includes(parseInt(catId));
    });
    return sb;
  }

  // Search Filter
  public setSearch(query: string) {
    this.searchQuery = query;
  }
  public getSearch() {
    return this.searchQuery;
  }
  public getPostsBySearch(query: string) {
    var sb = productblock.filter((item: { title: (string) }) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
    return sb;
  }
  // Fetch All filter
  public setPosts() {
    // var postsByCategory = this.getCategory() != undefined ? this.getPostsByCategory(this.getCategory()) : '';
    var postsBySearch = this.getSearch() != undefined ? this.getPostsBySearch(this.getSearch()) : '';

    // if ((postsByCategory != undefined && postsByCategory != []) && postsByCategory.length > 0) {
    //   this.shopblock = postsByCategory;
    // }
    // else if ((postsBySearch != undefined && postsBySearch != []) && postsBySearch.length > 0) {
    //   this.shopblock = postsBySearch;
    // } else {
    //   this.shopblock = this.productService.getProducts();
    // }

  }
  // Search 
  onSubmit() {
    if (this.searchText === "") {
      return;
    } else {
      this.route.navigate(['shop/search', this.searchText]);
    }
  }
  //Detail
  public setPost(id: any) {
    this.shopdetails = productblock.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setSearch(this.router.snapshot.params.query);
    this.setCategory(this.router.snapshot.params.catId);
    this.setPosts();
    this.setPost(this.router.snapshot.params.id);
  }
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    //this.shopblock = this.productService.getProducts();
    this.setCategoriesCount();
    this.cartlength = this.productService.getProductsCountInCart();
    this.wishlistlength = this.productService.getProductsCountInWishlist();
    this.productService.watchStorage().subscribe((data) => {
      this.cartlength = this.productService.getProductsCountInCart();
      this.wishlistlength = this.productService.getProductsCountInWishlist();
    })
  }
  public setCategoriesCount() {
    for (var i = 0; i < this.productcategory.length; i++) {
      //var count = this.productblock.filter((post: { category: number[]; }) => { return post.category.includes(this.productcategory[i].id) });
      // count = count.length;
      // this.productcategory[i].count = count;
    }
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

  // Add to cart btn
  public handleAddToCart(product: Product) {
    this.productService.addToCart(product);
  }
  public handleOutofStock() {
    alert('Product Out of Stock')
  }
  public handlePopupAddToCart(product: Product) {
    for (let i = 0; i < this.counter; i++) {
      this.productService.addToCart(product);
    }
  }
  public detailHandleAddToCart(product: Product) {
    for (let i = 0; i < this.counter; i++) {
      this.productService.addToCart(product);
    }
  }
  // Add to Wishlist btn
  public handleAddToWishlist(product: Product) {
    this.productService.addToWishlist(product);
  }
  public handleDeleteFromWishlist(product: Product) {
    if (confirm('Are you sure you want to delete this item from your Wishlist?')) {
      this.productService.deleteFromWishlist(product);
    }
  }
  public isProductInWishlist(id: number) {
    return this.getWishlistProductsFromStorage()?.includes(id.toString());
  }
}
