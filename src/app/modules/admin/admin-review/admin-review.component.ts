import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminReview } from './model/adminReview';
import { AdminReviewService } from './admin-review.service';
import { AdminConfirmDialogService } from '../common/service/admin-confirm-dialog.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrl: './admin-review.component.scss'
})
export class AdminReviewComponent implements OnInit {
  


  displayedColumns: string[] = ["authorName", "content", "moderated", "actions"];
  data: AdminReview[] = [];
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    private adminReviewService: AdminReviewService,
    private dialogService: AdminConfirmDialogService
  ){}

  ngOnInit(): void {
    this.getReviews();    
  }

  getReviews() {
    this.adminReviewService.getReviews().subscribe(reviews => this.data = reviews);
  }

  confirmModerate(element: AdminReview) {
    this.dialogService.openConfirmDialog('Czy chcesz zatwierdzić opinię?')
      .afterClosed()
      .subscribe(result => {
        if(result) {
          this.adminReviewService.moderate(element.id)
            .subscribe(()=>{
              this.data.forEach((value, index) => {
                if (element === value) {
                  element.moderated = true;
                }
              })
            })
        }
      })
  }

  confirmDelete(element: AdminReview) {
    this.dialogService.openConfirmDialog('Czy chcesz usunąć tę opinię?')
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.adminReviewService.delete(element.id)
            .subscribe(() => {
              this.data.forEach((value, index) => {
                if (element === value) {
                  this.data.splice(index, 1);
                  this.table.renderRows;
                }
              })
            })
        }
      })

  }
}
