import { Component } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { Post } from '../../models/post';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DashboardPostFormDialog } from '../dashboard-post-form-dialog/dashboard-post-form-dialog';
import { PostService } from '../../service/post-service';

@Component({
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  selector: 'app-dashboard-post-tab',
  styleUrl: './dashboard-post-tab.css',
  templateUrl: './dashboard-post-tab.html',
})
export class DashboardPostTab {
  constructor(
    private dialog: MatDialog,
    private postService: PostService,
  ) {}
  dataSource = new MatTableDataSource<Post>();
  displayedColumns = ['id', 'author', 'title', 'date', 'edit', 'delete'];

  ngOnInit() {
    this.getPosts();
  }

  openPostFormDialog() {
    const dialogRef = this.dialog.open(DashboardPostFormDialog);
    dialogRef.afterClosed().subscribe((result) => {
      this.getPosts();
    });
  }

  openEditFormDialog(id: string) {
    const dialogRef = this.dialog.open(DashboardPostFormDialog, {
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getPosts();
    });
  }

  deletePost(id: string) {
    this.postService.deletePost(id).subscribe({
      next: () => {
        this.dataSource.data = this.dataSource.data.filter((post) => post.id !== id);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getPosts() {
    this.postService.findAll().subscribe({
      next: (response) => {
        this.dataSource.data = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
