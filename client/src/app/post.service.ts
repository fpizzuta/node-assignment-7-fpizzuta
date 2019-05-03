import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = environment.apiURL;
   
  constructor(private http:HttpClient) { }

  listPosts(){
    return this.http.get(this.apiURL + '/api/posts');
  }

  deletePosts(id){
    return this.http.delete(this.apiURL + '/api/delete/'+id);
  }

  getPost(id){
    return this.http.get(this.apiURL + '/api/posts/'+id);
  }
  updatePost(id,post){
    return this.http.put(this.apiURL + '/api/posts/'+id,post);
  }
}
