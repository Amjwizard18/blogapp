import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  posts = this.blogService.getPosts();

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {}

  editPost(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deletePost(id: number): void {
    if (confirm('Are you sure you want to delete this post?')) {
      this.blogService.deletePost(id);
      this.posts = this.blogService.getPosts(); // Refresh the list after deletion
    }
  }
}
