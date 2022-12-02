import React from 'react';
import Form from "../../Components/Form/Form";
import {useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {PostApi} from "../../type";


const AddPost = () => {
  const navigate = useNavigate();

  const createPost = async (post:PostApi)=> {
    try {
      await axiosApi.post('/posts.json', post);
      navigate('/');

    } finally {

    }
  }

  return (
    <>
      <Form onSubmit={createPost}/>
    </>
  );
};

export default AddPost;