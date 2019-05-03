import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  title = 'angularStart';
  username = "Placeholder";
  postList = null;
  apiURL = '';
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.listPosts().subscribe((posts)=>{
      this.postList = posts;
    });
    this.apiURL = environment.apiURL; 
    console.log('apiURL '+this.apiURL);
  }

}
