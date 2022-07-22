import React, { useContext } from "react";
import axios from "axios";
import timeStamps from "../Utils";

const Comment = comment => {
	const date = new Date(comment.comment.createdAt).toLocaleString();

	return (
        <div class="comment">
        <div class="comment-user">
            <p>{comment.comment.User.username}</p>
            <span>{date}</span>
        </div>
        <div class="comment-body">{comment.comment.comments}</div>
    </div>
			) 
};
export default Comment;