import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { getPosts } from 'src/app/service/posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {
  posts!: Post[];
  constructor() {
    getPosts().then(posts => {
      console.log(posts)
      this.posts = posts.lista;
      this.activePosts()
      console.log(this.posts)
    })
  }
  ngOnInit(): void {

  }





upload(id: number) {
fetch('http://localhost:3000/lista' + '/' + id, {
  method: 'PATCH',
  body: JSON.stringify({
    active: false,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
location.reload();
}

delete(id: number) {
  fetch('http://localhost:3000/lista' + '/' + id, {
  method: 'DELETE',
})
location.reload();
}

activePosts() {
  this.posts = this.posts.filter(post => post.active);
}
    }
