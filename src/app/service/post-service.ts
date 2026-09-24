import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Service()
export class PostService {
  private httpClient = inject(HttpClient);

  createPost(post: Post): Promise<void> {
    return this.httpClient
      .post(`http://localhost:3000/posts`, post)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }

  updatePost(post: Post) {
    return this.httpClient
      .put(`http://localhost:3000/posts/${post.id}`, post)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }

  findPostById(id: string): Promise<Post> {
    return this.httpClient
      .get(`http://localhost:3000/posts/${id}`)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }

  deletePost(id: string) {
    return this.httpClient
      .delete(`http://localhost:3000/posts/${id}`)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }

  findAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('http://localhost:3000/posts');

  }
}
