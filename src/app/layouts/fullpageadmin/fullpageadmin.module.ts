import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageadminComponent } from './fullpageadmin.component';
import { AdminComponent } from '../../modules/admin/admin.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../shared/material.module';
import { AdminProductComponent } from '../../modules/admin/admin-product/admin-product.component';
import { AdminProductUpdateComponent } from '../../modules/admin/admin-product/admin-product-update/admin-product-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminProductAddComponent } from '../../modules/admin/admin-product/admin-product-add/admin-product-add.component';
import { AdminProductFormComponent } from '../../modules/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminMessageComponent } from '../../modules/admin/common/component/admin-message/admin-message.component';
import { AdminConfirmDialogComponent } from '../../modules/admin/common/component/admin-confirm-dialog/admin-confirm-dialog.component';
import { AdminCategoryComponent } from '../../modules/admin/admin-category/admin-category.component';
import { AdminCategoryAddComponent } from '../../modules/admin/admin-category/admin-category-add/admin-category-add.component';
import { AdminCategoryUpdateComponent } from '../../modules/admin/admin-category/admin-category-update/admin-category-update.component';
import { AdminCategoryFormComponent } from '../../modules/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminReviewComponent } from '../../modules/admin/admin-review/admin-review.component';



@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent,
    AdminProductComponent,
    AdminProductUpdateComponent,
    AdminProductAddComponent,
    AdminProductFormComponent,
    AdminMessageComponent,
    AdminConfirmDialogComponent,
    AdminCategoryComponent,
    AdminCategoryAddComponent,
    AdminCategoryUpdateComponent,
    AdminCategoryFormComponent,
    AdminReviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FullpageadminModule { }
