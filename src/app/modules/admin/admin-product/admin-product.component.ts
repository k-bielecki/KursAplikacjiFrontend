import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AdminProduct } from './adminProduct';
import { AdminProductService } from './admin-product.service';
import { MatPaginator } from '@angular/material/paginator';
import { map, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrl: './admin-product.component.scss'
})
export class AdminProductComponent implements  AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator
  displayedColumns: string[] = ["id", "name", "price"];
  totalElements: number = 0;
  data: AdminProduct[] = [];

  constructor (private adminProductService: AdminProductService) {}

  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.adminProductService.getProducts(this.paginator.pageIndex, this.paginator.pageSize);
      })
      
    ).subscribe(data =>{
      this.totalElements = data.totalElements;
      this.data = data.content;
    }); 
  }
}
