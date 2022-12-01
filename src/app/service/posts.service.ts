import { Post } from "../models/post";

export async function getPosts() {
  return await (await fetch('assets/db.json')).json();
}

// let posts : Post[]
// export async function getPosts() {
//   return posts;
// }

// export async function updatePost(data: Partial<Post>, id: number) {
//   posts = posts.map(post => post.id == id? {...post, ...data}: post);
//   return posts.find(post => post.id == id) as Post
// }
