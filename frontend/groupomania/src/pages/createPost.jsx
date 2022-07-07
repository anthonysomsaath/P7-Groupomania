import React, { useState } from "react";

const CreatePost = ({onPost}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

async function postData(e) {
    e.preventDefault();
    console.log(title, content)

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          title: title,
          content: content,
        }),
      };
      await fetch("http://localhost:3300/api/post", requestOptions)
        .then((response) => {
          if (response.status !== 201) {
  
          } else {
            onPost();
            setTitle("");
            setContent("");
          }
        })
  
        .catch((error) => console.log(error));
  
    }

return (
<form onSubmit={postData}>
<h1>Nouveau post</h1>
<div className="form-group">
                  <label htmlFor="Title">
                    Title
                  </label>
                  <input
                    id="title"
                    required
                    name="titre"
                    type="text"
                    className="form-control"
                    placeholder="Titre"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="post">
                    Post
                  </label>
                  <textarea
                    className="form-control"
                    required
                    id="post"
                    rows="3"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                  ></textarea>
                </div>
                <div className="buttonPost">
                <button type="submit">
                  Partager
                </button>
              </div>
</form>
)
}

export default CreatePost