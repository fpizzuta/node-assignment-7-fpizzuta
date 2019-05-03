import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute} from '@angular/router';
import {  ParamMap } from '@angular/router';


@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css'],
  providers: [PostService]
})
export class PostdetailComponent implements OnInit {
  post:any;

  constructor(private postService:PostService, private route:ActivatedRoute) {   }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const param = this.route.snapshot.paramMap.get('id');
    this.postService.getPost(param)
    .subscribe((post) => {
      this.post = post;
    });
  }

  updatePost(obj:any):void {
    this.post._id = obj._id;
    this.post.title = obj.title;
    this.post.date = obj.date;
    this.post.audience = obj.audience;
    this.post.image = obj.image;
    this.post.message = obj.message;
    console.log("this.post: " + JSON.stringify(this.post));
    // call the photoService update method
    this.postService.updatePost(this.post._id, this.post)
     .subscribe((result)=>{
       location.reload();
    });
  } 
}
