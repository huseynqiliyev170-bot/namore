"use client";

import { useContext } from 'react';
import { CommentContext } from "@context/commentContext";

const CommentItem = ({ item, index, depth }) => {
  const { commentReply, setCommentReply, postCommentOpen, setPostCommentOpen } = useContext(CommentContext);
  
  const postCommentReplyHandler = (comment_id) => {
    setCommentReply(comment_id);
    setPostCommentOpen(true);
  }

  return (
    <>
      <div className="mil-comment-head mil-fade-up">
          <div className="mil-author">
              <div>
                  <h5>{item.name}</h5>
                  <p className="mil-text-sm">{item.published_date}</p>
              </div>
          </div>
          {depth < 3 &&
          <div className="mil-reply" onClick={() => postCommentReplyHandler(item.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left">
                  <polyline points="9 14 4 9 9 4"></polyline>
                  <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
              </svg>
          </div>
          }
      </div>
      <p className="mil-fade-up">{item.message}</p>
      {item.children !== undefined &&
      <ul>
          {item.children.map((child, child_key) => (
          <li className="mil-comment mil-mb-40" key={`post-comment-item-${index}-child-${child_key}`}>
              <CommentItem item={child} index={child_key} depth={depth+1} />
          </li>
          ))}
      </ul>
      }
    </>
  );
};
export default CommentItem;
  