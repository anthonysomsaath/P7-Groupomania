/*import React, { useState, useEffect, useContext } from 'react';
import timeStamps from "../Utils";
import { deletePost, addPost, getPosts, } from "../actions/postActions";

const Post = ()=> {
  const [posts, setPosts] = useState(null);
  const [correct, setCorrect] = useState(false)
  const [newPost, setNewPost] = useState({
		title: '',
		content: '',
		imageUrl: '',
	});



  const handlePosts = () => {
		getPosts()
			.then((response) => {
				setPosts(response.data);
			})
			.catch((error) => error('danger', error.response.data.error));
	};

  useEffect(() => {
		if (!posts) {
			handlePosts();
		}
	}, [posts]);

  useEffect(() => {
		if (newPost.title !== '' && newPost.content !== '' && newPost.imageUrl) {
			setCorrect(true);
		}
	}, [newPost]);

  const submitHandler = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('title', newPost.title);
		formData.append('content', newPost.content);
		formData.append('attachment', newPost.imageUrl, newPost.imageUrl.name);

		addPost(formData)
			.then((response) => {
				handlePosts();
			})
			.catch((error) => error('danger', error.response.data.error));
	};

  const handleDeletePost = (id) => {
		deletePost(id)
			.then((response) => {
				const data = posts.filter((post) => post.id !== id);
				setPosts(data);
			})

			.catch((error) => error('danger', error.response.data.error));
	};

  const handlePost = (e) => {
		if (e.target.name !== 'imageUrl') {
			setNewPost({ ...newPost, [e.target.name]: e.target.value });
		} else {
			setNewPost({
				...newPost,
				imageUrl: e.target.files[0],
			});
		}
	};


  return (
    <>
			{posts ? (
				<>
					<div className='post-form'>
						<form
							onSubmit={submitHandler}
							method='post'
							className='postForm'
						>
							<div className='card-header'>
								<label htmlFor='title'>Title</label>
								<input
									type='text'
									className='newPost-title'
									value={newPost.title}
									onChange={(e) => handlePost(e)}
									id='title'
									name='title'
									placeholder='Your title'
									aria-label='Your title'
								/>
							</div>

							<div className='card-body'>
								<label htmlFor='content'>Your content</label>
								<textarea
									className='newPost-content'
									value={newPost.content}
									onChange={(e) => handlePost(e)}
									placeholder='Content'
									id='content'
									name='content'
								/>
								<label class='' htmlFor='imageUrl'></label>
								<input
									className='newPost-image'
									onChange={(e) => handlePost(e)}
									id='imageUrl'
									name='imageUrl'
									type='file'
								/>

								{correct ? (
									<button type='submit'>
										Post
									</button>
								) : (
									<button disabled type='submit'>
										error
									</button>
								)}
							</div>
						</form>
					</div>

				<div className='post'>
						{posts && (
							<>
								{posts.map((post) => (
									
								))}
							</>
						)}
					</div>
				</>
			)
	);
}

export default Post*/