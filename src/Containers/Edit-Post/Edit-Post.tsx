import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {PostApi} from "../../type";
import Form from "../../Components/Form/Form";

const EditPost = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostApi | null>(null);

  const fetchOnePost = useCallback(async () => {
    try{
      const postResponse = await axiosApi.get<PostApi>('/posts/'+ id + '.json');
      setPost(postResponse.data)
    } finally {

    }
  },[id])

  useEffect(() => {
    if(id) {
      fetchOnePost().catch(console.error);
    }
  },[fetchOnePost]);

  const updatePost = async (post:PostApi) => {
    try {
      await axiosApi.put('/posts/' +'id'+ '.json', post);
      navigate('/');
    } finally {

    }
  }



  return (
    <div>
      {post && (
        <Form onSubmit={updatePost} editPost={post}/>
      )}
    </div>
  );
};

export default EditPost;