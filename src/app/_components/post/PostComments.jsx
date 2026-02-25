'use client';

import CommentItem from "@components/post/CommentItem";
import PostCommentForm from "@components/forms/PostCommentForm";
import { useContext, useState } from 'react';
import { BasicContext } from "@context/basicContext";
import { CommentContext } from "@context/commentContext";

const PostCommentButton = () => {
    const { strings } = useContext(BasicContext);
    const { commentReply, setCommentReply, postCommentOpen, setPostCommentOpen } = useContext(CommentContext);
    
    const postCommentHandler = (e) => {
        e.preventDefault();
        setCommentReply(false);
        setPostCommentOpen(true);
    }

    return (
        <a href="#." className="mil-button mil-accent-1 mil-reply" onClick={(e) => postCommentHandler(e)}>
            <span>{strings.postAComment}</span>
        </a>
    );
}

const PostComments = ({ postId, comments = [], total = 0 }) => {
  const { strings } = useContext(BasicContext);
  const [ commentReply, setCommentReply ] = useState(false);
  const [ postCommentOpen, setPostCommentOpen ] = useState(false);
  const value = { commentReply, setCommentReply, postCommentOpen, setPostCommentOpen };

  return (
    <CommentContext.Provider value={value}>
        <h2 className="mil-row-title mil-fade-up mil-mb-100">{strings.comments} <span className="mil-badge">{total}</span></h2>
        <ul className="mil-comments mil-mb-100">
            {comments.map((item, key) => (
            <li className="mil-comment mil-mb-40" key={`post-comments-${key}`}>
                <CommentItem item={item} index={key} depth={0} />
            </li>
            ))}
        </ul>
        <div className="mil-divider mil-mb-40"></div>
        
        <PostCommentButton />

        {/* comment popup */}
        <div className={`mil-comment-popup-frame ${postCommentOpen ? "mil-active" : ""}`}>
            <div className="mil-book-popup">
                <div className="mil-popup-head mil-mb-40">
                    <h3 className="mil-h3-lg">{strings.postAComment}</h3>
                    <div className="mil-close-button" onClick={() => setPostCommentOpen(false) }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                </div>
                <PostCommentForm postId={postId} replyId={commentReply} />
            </div>
        </div>
        {/* comment popup end */}
    </CommentContext.Provider>
  );
};
export default PostComments;