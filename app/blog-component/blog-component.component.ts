import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { BlogPost } from '../BlogPost';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.css'],

})
export class BlogComponent implements OnInit {

  page: number = 1;
  tag: string = null;
  category: string = null;
  querySub: any;

  constructor(private data: PostService, private route: ActivatedRoute) { };
  
  blogPosts: Array<BlogPost>;

  getPage(num) {
    this.querySub = this.data.getPosts(num, this.tag, this.category).subscribe(data => {
      if (data.length > 0) {
        this.blogPosts = data; this.page = num;
      }
    });
  }

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {
      if (params['tag']) {
        this.tag = params['tag'];
        this.category = null;
      }
      if (params['category']) {
        this.category = params['category'];
        this.tag = null;
      }
      this.getPage(+params['page'] || 1);
    });
  }

  ngOnDestroy()
  {
    if(this.querySub) this.querySub.unsubscribe();
  }
}
