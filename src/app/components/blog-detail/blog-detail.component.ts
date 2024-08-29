import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  post: any;

  constructor(private route: ActivatedRoute, private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.post = this.blogService.getPost(id);
  }

  deletePost(id: number | undefined): void {
    if (id && confirm('Are you sure you want to delete this post?')) {
      this.blogService.deletePost(id);
      this.router.navigate(['/']); // Navigate back to the list after deletion
    }
  }
}
