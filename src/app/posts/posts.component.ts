import { Component, OnInit } from '@angular/core';
import { POSTS } from '../mockData/posts';
import { Post } from '../interfaces/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent implements OnInit {
  posts:Post[]=POSTS; 

  constructor() {
    console.log(this.posts);
   }

  ngOnInit() {
    console.log(this.posts);
  }

}

