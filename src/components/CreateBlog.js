import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

import { addBlog } from '../actions/blog';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const dispatch = useDispatch();

  const addNewBlog = (event) => {
    event.preventDefault();
    dispatch(
      addBlog({
        title,
        author,
        url,
        likes: 0,
      })
    );

    setAuthor('');
    setTitle('');
    setUrl('');
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={addNewBlog}>
          <div className="form-control">
            <label htmlFor="title">Title </label>

            <input
              id="title"
              type="text"
              value={title}
              name="Title"
              onChange={({ target }) => setTitle(target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="author">Author </label>
            <input
              id="author"
              type="text"
              value={author}
              name="Author"
              onChange={({ target }) => setAuthor(target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="url"> Url </label>
            <input
              id="url"
              type="text"
              value={url}
              name="Url"
              onChange={({ target }) => setUrl(target.value)}
            />
          </div>
          <button id="create-button" type="submit">
            create
          </button>
        </form>
      </article>
    </>
  );
};

export default CreateBlog;
