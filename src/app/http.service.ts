import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = 'http://jsonplaceholder.typicode.com/posts';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    return this.httpClient.get(this.url);
  }
  
  create(post){
    return this.httpClient.post(this.url, JSON.stringify(post));
  }

  delete(id){
    return this.httpClient.delete(this.url+"/"+id);
  }

  getPost(id){
    return this.httpClient.get(this.url + "/" + id);
  }

  edit(id, body){
    return this.httpClient.put(this.url + "/" + id, body);
  }
}
