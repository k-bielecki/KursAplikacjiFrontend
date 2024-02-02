import { Component, OnInit } from '@angular/core';
import { ProductDetails } from './model/productDetails';
import { ProductDetailsService } from './product-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  product!: ProductDetails;

  constructor(
    private productDetailService: ProductDetailsService,
    private router: ActivatedRoute 
    ) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() {
    let slug = this.router.snapshot.params['slug'];
    this.productDetailService.getProductDetails(slug)
    .subscribe(product => this.product = product);
  }

}
