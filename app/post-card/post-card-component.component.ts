import { Component, OnInit, Input} from '@angular/core';
import { BlogPost } from '../BlogPost';
@Component({
  selector: 'app-post-card-component',
  templateUrl: './post-card-component.component.html',
  styleUrls: ['./post-card-component.component.css']
})
export class PostCardComponent implements OnInit {


  @Input() post:BlogPost;
  constructor() { }

  ngOnInit(): void {
  }

}