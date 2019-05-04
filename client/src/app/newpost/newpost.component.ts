import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})

export class NewpostComponent implements OnInit {

  post = {};

  constructor(private postService:PostService,private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  save(obj) : void {
    console.log('form values ', this.post);
    this.postService.newPost(this.post)
      .subscribe((post)=>{
        location.reload();
        this.flashMessage.show('Post Created', {cssClass: 'flash', timeout:5000});
      });
   }
}
