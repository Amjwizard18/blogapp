import { Injectable } from '@angular/core';

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogPosts: BlogPost[] = [];
  private nextId: number = 1;

  constructor() {}

  getPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getPost(id: number): BlogPost | undefined {
    return this.blogPosts.find(post => post.id === id);
  }

  createPost(post: BlogPost): void {
    post.id = this.nextId++;
    this.blogPosts.push(post);
  }

  updatePost(updatedPost: BlogPost): void {
    const index = this.blogPosts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      this.blogPosts[index] = updatedPost;
    }
  }

  deletePost(id: number): void {
    this.blogPosts = this.blogPosts.filter(post => post.id !== id);
  }
}
