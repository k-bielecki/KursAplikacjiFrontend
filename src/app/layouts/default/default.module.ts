import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from '../../modules/home/home.component';
import { ProductComponent } from '../../modules/product/product.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import { ProductDetailsComponent } from '../../modules/product-details/product-details.component';
import { CategoryComponent } from '../../modules/category/category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from '../../modules/cart/cart.component';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailsComponent,
    CategoryComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }
