import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  @Input() post;
  @Input() apiURL;
  
  
  constructor(private postService:PostService, private router: Router) { }

  ngOnInit() {
    
    console.log(this.apiURL);
  }

  deletePost(){
    if (confirm(`Are you sure you want to delete ${this.post.title}?`)){
      console.log(`deleting ${this.post._id}`);
      this.postService.deletePost(this.post._id)
        .subscribe((result)=>{
          // alert(`Post ${this.post.title} has been deleted`);
          this.router.navigate(['/allposts']);
        })
      }
  }

}
