import React from 'react';
import PostItem from "./Post-Item";
import {Post} from "../../type";


interface Props {
  posts:Post[];
}

const Posts:React.FC<Props> = ({posts}) => {
  if (posts.length <= 0) {
    return (
      <div>
        <h3>Add new post</h3>
      </div>
    )
  } else {

    return (
      <div className='d-flex flex-column-reverse'>

        {posts.map((post) => (
          <PostItem
            key={post.id}
            posts={post}/>
        ))}
      </div>
    )
  }
};

export default Posts;