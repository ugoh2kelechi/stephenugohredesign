import { Component, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import { ProductService } from '../../services/product.service';
import data from '../../data/navigation.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends HelperService  {
  public navigation = data;
  public cartlength: number | undefined;
  public wishlistlength: number | undefined;
  constructor(public helperService: HelperService, private productService : ProductService) {
    super();
  }
  ngOnInit(): void { 
    this.cartlength = this.productService.getProductsCountInCart();
    this.wishlistlength = this.productService.getProductsCountInWishlist();
    this.productService.watchStorage().subscribe((data) => {
      this.cartlength = this.productService.getProductsCountInCart();
      this.wishlistlength = this.productService.getProductsCountInWishlist();
    })
  }
  @Input() layout: number | string | undefined;

}
