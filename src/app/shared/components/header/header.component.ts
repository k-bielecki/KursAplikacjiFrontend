import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HeaderService } from './header.service';
import { count } from 'console';
import { CartIconService } from '../../../modules/common/service/cart-icon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  
  title = "Shop";
  cartProductCounter = "";

  constructor(
    private cookieService: CookieService,
    private headerService: HeaderService,
    private cartIconService: CartIconService
    ){ }
  
  ngOnInit(): void {
    this.getCountProducts();
    this.cartIconService.subject
      .subscribe(counter => this.cartProductCounter = String(Number(counter)>0 ? counter:""))
  }

  getCountProducts(){
    this.headerService.getCountProducts(Number(this.cookieService.get("cartId")))
      .subscribe(counter => this.cartProductCounter = String(Number(counter)>0 ? counter:""))
  }
}
