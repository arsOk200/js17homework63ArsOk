import React from 'react';

import {Post} from "../../type";
import {Link} from "react-router-dom";
interface Props {
  posts:Post;
}

const PostItem:React.FC<Props> = ({posts}) => {


  return (
    <div className="card mb-2 mt-2">
      <div className="card-header">
        {posts.date}
      </div>
      <div className="card-body">
        <h5 className="card-title">{posts.title}</h5>
        <div className='d-flex gap-2'>
          <Link to={'/edit-posts/'+ posts.id} className='btn btn-primary'>Edit or Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default PostItem;