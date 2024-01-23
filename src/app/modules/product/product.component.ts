import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }

}
