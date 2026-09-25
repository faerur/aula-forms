import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Service()
export class PostService {
  private httpClient = inject(HttpClient);
  private baseUrl: string = `http://localhost:3000/posts`;

  createPost(post: Post): Observable<void> {
    return this.httpClient.post<void>(this.baseUrl, post);
  }

  updatePost(post: Post): Observable<void> {
    return this.httpClient
      .put<void>(this.baseUrl + `/${post.id}`, post);
  }

  findPostById(id: string): Observable<Post> {
    return this.httpClient.get<Post>(this.baseUrl + `/${id}`);
  }

  deletePost(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.baseUrl + `/${id}`);
  }

  findAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.baseUrl);

  }
}
