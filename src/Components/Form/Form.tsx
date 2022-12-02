import React, {useState} from 'react';
import {PostApi, PostMutation} from "../../type";
import {useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";


interface Props{
  onSubmit:(post:PostApi) => void;
  editPost?:PostApi;
}

const Form:React.FC<Props> = ({onSubmit, editPost}) => {
  const initialState = editPost? {
    ...editPost,
  }:{
    title:'',
    text:'',
    date: new Date().toString(),
  }
  const [post, setPost] = useState<PostMutation>(initialState);

  const onPostChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target
    setPost(prev => ({...prev, [name]:value}));
  };

  const onFormSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    console.log(post);
    onSubmit(post);
  };

   const {id} = useParams();
  const deletePost = async ()=> {
    try {
      await axiosApi.delete('/posts/' + id + '.json');
    } finally {

    }

  }

  return (
    <form className='container mt-3' onSubmit={onFormSubmit}>
      <h4>{editPost? "Edit post": "Add new post"}</h4>
      <div className="form-group">
        <label htmlFor="name">Title</label>
        <input id='title' name='title' value={post.title} onChange={onPostChange} type="text" className="form-control"/>
      </div>
      <div className="form-group">
        <label htmlFor='description'>Your text</label>
        <textarea name="text" id="text" value={post.text} onChange={onPostChange} className='form-control' style={{height:'200px', resize:'none'}}/>
      </div>
      <div className='d-flex gap-2'>
        <button type='submit' className="btn btn-primary mt-2">
          Save
        </button>
        {editPost ? (<button onClick={deletePost} className='btn btn-danger mt-2'>Delete</button>):(
          <button disabled className='btn btn-secondary mt-2'>Delete</button>
        )}

      </div>


    </form>
  );
};

export default Form;