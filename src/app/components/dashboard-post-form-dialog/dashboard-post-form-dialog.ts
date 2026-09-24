import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
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
    FormsModule,
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

  constructor(private dialogRef: MatDialogRef<DashboardPostFormDialog>, private postService: PostService, @Inject(MAT_DIALOG_DATA) public data: {id: string}){

  }

  ngOnInit(){
    if(this.data){
      this.formTitle = 'Editar postage,'
      this.submitButtonLabel = 'Editar'
    }
  }

  postForm = new FormGroup({
    author: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    date: new FormControl(DateTime.now(), Validators.required),
    content: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log(this.postForm.value);
    const author = this.postForm.value.author!!;
    const title = this.postForm.value.title!!;
    const date = this.postForm.value.date!!;
    const content = this.postForm.value.content!!;
    const post = new Post(uuidv4(), author, title, date, content);
    this.postService.createPost(post);
    this.dialogRef.close();
  }
}
