import fetchApi from "../api/fetchApi";
import { deletePost } from "../actions/postActions";

const Post = ({...post})=> {

  const onClickDelete = (e) => {
    e.preventDefault();
    if(window.confirm("Are you sure you want to delete this message?")){
      deletePost(post.id) 
      post.onErase() 
    }
  };

  return (
    <div classname ="postCard">
      <div className ="cardHeader">
      <div>Post title</div>
      <div>Post User</div>
      <div>
        <a href ="#" onClick={onClickDelete}>Delete option</a>
        </div>
      </div>
      <div className="cardBody">
        <div>Post content</div>
      </div>
      <div className="cardFooter">
        <div>Comments</div>
      </div>
    </div>
    
  )
}

export default Post