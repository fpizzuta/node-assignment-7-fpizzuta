import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { environment } from '../environments/environment';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  title = 'angularStart';
  username = "Placeholder";
  postList = null;
  apiURL = '';
  
  constructor(private postService:PostService,private flashMessage: FlashMessagesService){
    //here
  }

  ngOnInit(){
    // this.postList = this.postService.listPosts();
    this.postService.listPosts().subscribe((posts)=>{
      this.postList = posts;
    });
    this.apiURL = environment.apiURL; 
    console.log('apiURL '+this.apiURL);
  }

  
}
