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
   like: boolean = false;
   like_No: number =0;

   setLike() {
     this.like = true;
     this.like_No ++;
     
   }
 
   UnLike() {
     this.like = false;
     this.like_No--;
   }


  ngOnInit() {
    console.log(this.posts);
  }

}

