'use client';

import { createContext } from 'react';

const CommentContext = createContext({
  commentReply: false,
  setCommentReply: () => {},
  postCommentOpen: false,
  setPostCommentOpen: () => {}
});

export { CommentContext };