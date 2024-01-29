import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminProductUpdateService } from './admin-product-update.service';
import { AdminProductUpdate } from './model/adminProductUpdate';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-product-update',
  templateUrl: './admin-product-update.component.html',
  styleUrl: './admin-product-update.component.scss'
})
export class AdminProductUpdateComponent implements OnInit {

  product!: AdminProductUpdate;
  productForm!: FormGroup;

  constructor(
    private router: ActivatedRoute,
    private AdminProductUpdateService: AdminProductUpdateService,    
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
    ) {}
  
  ngOnInit(): void {   

    this.productForm = this.formBuilder.group({
      name: [''],
      description: [''],
      category: [''],
      price: [''],
      currency: ['PLN'],
    })

    this.getProduct();
  }

  getProduct(){
    let id = Number(this.router.snapshot.params['id']);
    this.AdminProductUpdateService.getProduct(id)
    .subscribe(product => this.mapFormValues(product));
  }

  submit(){
    let id = Number(this.router.snapshot.params['id']);
    this.AdminProductUpdateService.savePost(id, {
      name: this.productForm.get('name')?.value,
      description: this.productForm.get('description')?.value,
      category: this.productForm.get('category')?.value,
      price: this.productForm.get('price')?.value,
      currency: this.productForm.get('currency')?.value
    } as AdminProductUpdate).subscribe(product => {
      this.mapFormValues(product);
      this.snackBar.open("Produkt został zapisany", '', {duration: 3000});
    });    
  }
  
  private mapFormValues(product: AdminProductUpdate): void {
    this.productForm.setValue({      
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price,
        currency: product.currency     
    })    
  }
}
