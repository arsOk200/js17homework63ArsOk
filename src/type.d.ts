export interface Post {
  id:string;
  title:string;
  text:string;
  date:string;
}

export interface PostMutation {
  title:string;
  text:string;
  date:string;
}


export type PostApi = Omit<Post, 'id'>;


export interface PostsList{
  [id:string]:Post;
}