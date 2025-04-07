import React from 'react';
import './ChatHeader.css';

const ChatHeader = ({ roomId }) => {
  return (
    <div className="chat-header">
      <h2>Chat Room: {roomId || 'General'}</h2>
      <div className="user-info">
        <span className="user-name">Test User</span>
      </div>
    </div>
  );
};

export default ChatHeader;