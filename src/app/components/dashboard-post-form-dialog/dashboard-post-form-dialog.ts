import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Post } from '../../models/post';
import {v4 as uuidv4} from 'uuid'
import { DateTime } from 'luxon';
import { PostService } from '../../service/post-service';

@Component({
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  selector: 'app-dashboard-post-form-dialog',
  styleUrl: './dashboard-post-form-dialog.css',
  templateUrl: './dashboard-post-form-dialog.html',
})
export class DashboardPostFormDialog {
  formTitle = 'Nova Postagem';
  submitButtonLabel = 'Salvar';


  constructor(
    private dialogRef: MatDialogRef<DashboardPostFormDialog>,
    private postService: PostService,
    @Inject(MAT_DIALOG_DATA) public data: { id?: string },
  ) {}

  ngOnInit() {

     if (this.data?.id) {

       this.formTitle = 'Editar postagem';
       this.submitButtonLabel = 'Editar';

       this.postService.findPostById(this.data.id).subscribe((post) => {
         console.log('POST ENCONTRADO:', post);

         this.postForm.patchValue({
           author: post.autor,
           title: post.title,
           date: post.data,
           content: post.content,
         });
       });
     }
  }

  postForm = new FormGroup({
    author: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    date: new FormControl<DateTime<boolean>>(DateTime.now(), Validators.required),
    content: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.postForm.invalid) {
      this.postForm.markAllAsTouched();
      return;
    }

    const author = this.postForm.value.author!;
    const title = this.postForm.value.title!;
    const date = this.postForm.value.date!;
    const content = this.postForm.value.content!;

    const post = new Post(this.data?.id ?? uuidv4(), author, title, date, content);

    if (this.data?.id) {
      this.postService.updatePost(post).subscribe(() => {
        this.dialogRef.close(true);
      });
    } else {
      this.postService.createPost(post).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }
}
