import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const Popup = () => {
  const [url, setUrl] = useState('');
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(true);
  const [readyToAsk, setReadyToAsk] = useState(false);
  const chatEndRef = useRef(null);

  const resetChat = () => {
    setMessages([]);
    setQuestion('');
    setReadyToAsk(false);
    setProcessing(true);
    fetchUrl();
  };

  const fetchUrl = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      const currentUrl = tabs[0]?.url;
      console.log('Sending this URL to backend for processing:', currentUrl);

      setUrl(currentUrl || '');

      if (!currentUrl) {
        setMessages([{ sender: 'bot', text: '❗ Unable to detect the current website.' }]);
        setProcessing(false);
        return;
      }

      try {
        const res = await fetch(`${API_BASE}/process`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: currentUrl })
        });

        if (!res.ok) {
          setMessages([{ sender: 'bot', text: '⚠️ This site could not be processed. It may block scraping.' }]);
          return;
        }

        setReadyToAsk(true);
      } catch (err) {
        setMessages([{ sender: 'bot', text: `❌ Processing failed: ${err.message}` }]);
      } finally {
        setProcessing(false);
      }
    });
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleAsk = async (customQuestion = null) => {
    const finalQuestion = customQuestion || question.trim();
    if (!finalQuestion || !readyToAsk || loading) return;

    setMessages((prev) => [...prev, { sender: 'user', text: finalQuestion }]);
    setQuestion('');
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, question: finalQuestion })
      });

      const text = await res.text();
      const parsed = (() => {
        try {
          return JSON.parse(text).answer || text;
        } catch {
          return text;
        }
      })();

      setMessages((prev) => [...prev, { sender: 'bot', text: parsed }]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: 'bot', text: `❌ Could not get answer: ${err.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <button onClick={resetChat} style={styles.backButton}>←</button>
        🤖 AskMe Assistant
      </div>

      <div style={styles.chatBox}>
        {messages.map((msg, idx) => (
          <div key={idx} style={msg.sender === 'user' ? styles.userRow : styles.botRow}>
            <div style={styles.avatar(msg.sender)}>{msg.sender === 'user' ? 'U' : 'AI'}</div>
            <div
              style={msg.sender === 'user' ? styles.userBubble : styles.botBubble}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(marked.parse(msg.text))
              }}
            />
          </div>
        ))}
        {loading && (
          <div style={styles.botRow}>
            <div style={styles.avatar('bot')}>AI</div>
            <div style={styles.typingBubble}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={styles.dot(i)} />
              ))}
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div style={styles.inputContainer}>
        <textarea
          placeholder="Ask something..."
          rows="2"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleAsk();
            }
          }}
          disabled={processing || loading || !readyToAsk}
          style={styles.textarea}
        />
        <button
          onClick={() => handleAsk()}
          disabled={processing || loading || !readyToAsk}
          style={styles.sendButton(loading || processing || !readyToAsk)}
        >
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    fontFamily: 'system-ui, sans-serif',
    width: 360,
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f9fafb',
    padding: 12,
    borderRadius: 8,
  },
  header: {
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: 8,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    background: 'none',
    border: 'none',
    fontSize: 18,
    cursor: 'pointer',
    padding: '0 8px',
  },
  chatBox: {
    flex: 1,
    overflowY: 'auto',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    border: '1px solid #e5e7eb',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  userRow: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    gap: 8,
  },
  botRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 8,
  },
  avatar: (sender) => ({
    width: 28,
    height: 28,
    borderRadius: '50%',
    backgroundColor: sender === 'user' ? '#10b981' : '#6b7280',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 600,
  }),
  userBubble: {
    backgroundColor: '#dcfce7',
    padding: '8px 12px',
    borderRadius: '16px 16px 0 16px',
    fontSize: 14,
    maxWidth: '75%',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
    wordWrap: 'break-word',
  },
  botBubble: {
    backgroundColor: '#f3f4f6',
    padding: '8px 12px',
    borderRadius: '16px 16px 16px 0',
    fontSize: 14,
    maxWidth: '75%',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
    wordWrap: 'break-word',
  },
  typingBubble: {
    backgroundColor: '#f3f4f6',
    padding: 10,
    borderRadius: 16,
    display: 'flex',
    gap: 4,
    width: 60,
    justifyContent: 'center'
  },
  dot: (i) => ({
    width: 6,
    height: 6,
    borderRadius: '50%',
    backgroundColor: '#9ca3af',
    animation: 'blink 1.4s infinite ease-in-out',
    animationDelay: `${i * 0.2}s`
  }),
  inputContainer: {
    display: 'flex',
    gap: 8,
    alignItems: 'flex-end',
    marginTop: 10
  },
  textarea: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    borderRadius: 8,
    border: '1px solid #ccc',
    resize: 'none'
  },
  sendButton: (disabled) => ({
    padding: '8px 12px',
    backgroundColor: disabled ? '#ccc' : '#3b82f6',
    color: '#fff',
    borderRadius: 8,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontWeight: 'bold'
  }),
};

ReactDOM.createRoot(document.getElementById('root')).render(<Popup />);
