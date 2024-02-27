import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../common/model/product';
import { Page } from '../common/model/page';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) {}


  page!: Page<Product>;

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.getProductPage(0, 10);
  }
  
  onPageEvent(event: PageEvent) {
    this.getProductPage(event.pageIndex, event.pageSize);
  }

  private getProductPage(page: number, size: number) {
    this.productService.getProducts(page, size)
      .subscribe(page => this.page = page);
  }
}
