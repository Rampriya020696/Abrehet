/* eslint-disable prettier/prettier */
import React from 'react';
import IsMe from './IsMe';
import Other from './Other';

type ChatItem = {
  isMe?: Boolean;
};

const ChatItem = ({isMe}: ChatItem) => {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
};

export default ChatItem;
