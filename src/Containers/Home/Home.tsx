import React from 'react';
import Posts from "../../Components/Posts/Posts";
import {Post} from "../../type";
import Spinner from "../../Components/Spinner/Spinner";

interface Props {
  posts:Post[];
  postLoading:boolean;
}


const Home:React.FC<Props> = ({postLoading, posts}) => {
  return (
    <div className='container'>
      {postLoading ? <Spinner/> :(
        <Posts posts={posts}/>
      )}
    </div>
  );
};

export default Home;