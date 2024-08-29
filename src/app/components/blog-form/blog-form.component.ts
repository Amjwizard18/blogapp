import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  post: any = { title: '', content: '' };

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.post = this.blogService.getPost(id);
    }
  }

  save(): void {
    if (this.post.id) {
      this.blogService.updatePost(this.post);
    } else {
      this.blogService.createPost(this.post);
    }
    this.router.navigate(['/']);
  }
}
