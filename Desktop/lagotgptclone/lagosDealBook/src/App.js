import './App.css';
import { useState } from 'react';
import gptLogo from '../src/assets/lagosLogo.jpg';
import Sidebar from './components/SideBar';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';

const baseURL = process.env.REACT_APP_API_URL;

function App() {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;
  
    const userMsg = { text: message, sender: 'user' };
    setChats(prev => [...prev, userMsg]);
    setMessage('');
    setLoading(true); 
  
    try {
      const res = await fetch(`${baseURL}/get_response`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          question: message,
          session_id: 'default',
        }),
      });
  
  
            const data = await res.json();
      console.log('Parsed data:', data);

      // Format the response to create proper structure
      let formattedAnswer = data.answer || "Sorry, I couldn't find an answer.";
      
      // Check if it's a numbered list response (like tourist centers or investments)
      console.log('Original response:', formattedAnswer); // Debug original
      
      if (formattedAnswer.includes('1.') || formattedAnswer.includes('Here are the top') || formattedAnswer.includes('tourist centers')) {
        console.log('Detected numbered list response'); // Debug detection
        // Split by double newlines and format as markdown
        if (formattedAnswer.includes('\n\n')) {
          const parts = formattedAnswer.split('\n\n');
          const mainHeading = parts[0];
          const listItems = parts.slice(1).join('\n\n');
          
          formattedAnswer = `# ${mainHeading}\n\n${listItems}`;
          console.log('Formatted response:', formattedAnswer); // Debug formatted
        }
      } else {
        console.log('No numbered list detected'); // Debug if not detected
      }

      const botReply = {
        text: formattedAnswer,
        sender: 'bot',
      };
  
      setChats(prev => [...prev, botReply]);
    } catch (err) {
      console.error("Error caught:", err);
      const errorReply = {
        text: "Error fetching response. Please try check your internet.",
        sender: 'bot',
      };
      setChats(prev => [...prev, errorReply]);
    }
    finally {
      setLoading(false);
  
    }
  };

  const clearChat = () => {
    setMessage('');
    setChats([]); // Optional: Only include this if you want to clear the entire chat history too
  };

  return (
    <div className="App">
      <Sidebar />
      
      <div className='main'>
        <div className="upperSideTop2">
          <div className="upperSideTop">
          <img src={gptLogo} alt="logo" className="logo" />
          <span className="brand">LagosinvestGPT</span>
          </div>
    {/* New Chat Button in Top Right */}
    <button className="newChatTopBtn" onClick={clearChat}>
      New Chat
    </button>

        </div>
        
        <ChatWindow chats={chats} loading={loading} />
     <ChatInput 
        message={message} 
        setMessage={setMessage} 
        handleSend={handleSend} 
        handleClear={clearChat} 
        loading={loading}
     />

      </div>
    </div>
  );
}

export default App;
