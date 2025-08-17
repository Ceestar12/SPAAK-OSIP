import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

export default function ChatWindow({ chats, loading }) {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats, loading]); // Include loading so it scrolls when loader appears

  return (
    <div className="chats">
      {chats.map((chat, index) => (
        <ChatMessage key={index} sender={chat.sender} text={chat.text} />
      ))}

      {loading && (
        <div className="chat-message bot loading">
          <span className="loader"></span> JUST A MOMENT...
        </div>
      )}

      <div ref={chatEndRef} />
    </div>
  );
}
