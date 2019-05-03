import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute} from '@angular/router';
import {  ParamMap } from '@angular/router';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css'],
  providers: [PostService]
})
export class EditpostComponent implements OnInit {

  constructor(private postService:PostService, private route:ActivatedRoute) {   }

  ngOnInit() {}  

}

