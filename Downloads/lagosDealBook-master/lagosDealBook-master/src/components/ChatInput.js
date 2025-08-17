import React, { useRef } from 'react';
import sendIcon from '../assets/send.png';

export default function ChatInput({ message, setMessage, handleSend, handleClear }) {
  const textareaRef = useRef(null);

  const onSend = () => {
    if (!message.trim()) return;
    handleSend();
    setMessage('');
    if (textareaRef.current) {
      textareaRef.current.scrollTop = 0;
      textareaRef.current.style.height = 'auto';
    }
  };

  return (
    <div className='chatFooter'>
      <div className='inp'>
        <textarea
          ref={textareaRef}
          placeholder='Ask me about investments in Lagos, Nigeria...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
        />
        <button className='send' onClick={onSend}>
        <img src={sendIcon} alt="Send" className="sendIcon" />
        </button>
        {/* <button className='clearBtnInside' onClick={() => {
          setMessage('');
          handleClear();
        }}>
          New Chat
        </button> */}
      </div>
    </div>
  );
}
