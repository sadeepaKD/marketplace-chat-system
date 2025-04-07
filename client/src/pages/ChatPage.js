import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChatHeader from '../components/ChatHeader/ChatHeader';
import ChatInput from '../components/ChatInput/ChatInput';
import ChatMessage from '../components/ChatMessage/ChatMessage';

const ChatPage = () => {
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  
  // Mock data for initial development
  useEffect(() => {
    // This would be replaced with actual authentication logic
    setUser({
      id: '123',
      name: 'Test User',
      type: 'buyer' // 'buyer', 'seller', or 'admin'
    });
    
    // This would be replaced with actual message fetching logic
    setMessages([
      {
        id: '1',
        sender: {
          id: '456',
          name: 'Test Seller',
          type: 'seller'
        },
        content: 'Hello, how can I help you?',
        timestamp: new Date().toISOString()
      },
      {
        id: '2',
        sender: {
          id: '123',
          name: 'Test User',
          type: 'buyer'
        },
        content: 'I have a question about the product.',
        timestamp: new Date().toISOString()
      }
    ]);
  }, []);
  
  const handleSendMessage = (message) => {
    const newMessage = {
      id: Date.now().toString(),
      sender: user,
      content: message,
      timestamp: new Date().toISOString()
    };
    
    setMessages([...messages, newMessage]);
    
    // This would be replaced with actual message sending logic
    console.log('Sending message:', newMessage);
  };
  
  return (
    <div className="chat-page">
      <ChatHeader roomId={roomId} />
      
      <div className="messages-container">
        {messages.map(message => (
          <ChatMessage 
            key={message.id} 
            message={message} 
            isOwnMessage={message.sender.id === user?.id} 
          />
        ))}
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatPage;