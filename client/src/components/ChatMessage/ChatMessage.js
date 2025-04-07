import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ message, isOwnMessage }) => {
  // Format the timestamp
  const formattedTime = new Date(message.timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
  
  return (
    <div className={`chat-message ${isOwnMessage ? 'own-message' : ''} message-${message.sender.type}`}>
      <div className="message-sender">{message.sender.name}</div>
      <div className="message-content">{message.content}</div>
      <div className="message-time">{formattedTime}</div>
    </div>
  );
};

export default ChatMessage;