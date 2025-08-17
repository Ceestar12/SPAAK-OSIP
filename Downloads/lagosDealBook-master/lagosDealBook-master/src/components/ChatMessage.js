import React from 'react';
import woman from '../assets/LagosGpt.png';
import man from '../assets/user.jpeg';
import ReactMarkdown from 'react-markdown';

// Custom components for styling Markdown elements
const markdownComponents = {
  p: ({ children, index }) => <p style={{ margin: '0', padding: index === 0 ? '0 0 5px 0' : '0', lineHeight: index === 0 ? '1.2' : '1' }}>{children}</p>,
  ul: ({ children }) => <ul style={{ paddingLeft: '24px', margin: '0', padding: '0', listStyleType: 'disc' }}>{children}</ul>,
  ol: ({ children }) => <ol style={{ paddingLeft: '24px', margin: '0', padding: '0', listStyleType: 'decimal' }}>{children}</ol>,
  li: ({ children, index }) => <li style={{ margin: '0', padding: index === 0 ? '0 0 8px 0' : '0', lineHeight: '1' }}>{children}</li>,
  h1: ({ children, index }) => <h1 style={{ margin: '0 0 5px 0 !important', padding: '0 !important', fontSize: '1.6em', fontWeight: 'bold', color: '#ffffff', lineHeight: '1.2 !important' }}>{children}</h1>,
  h2: ({ children }) => <h2 style={{ margin: '0', padding: '0', fontSize: '1.4em', fontWeight: 'bold', color: '#ffffff' }}>{children}</h2>,
  h3: ({ children }) => <h3 style={{ margin: '0', padding: '0', fontSize: '1.2em', fontWeight: 'bold', color: '#ffffff' }}>{children}</h3>,
  h4: ({ children }) => <h4 style={{ margin: '0', padding: '0', fontSize: '1.1em', fontWeight: 'bold', color: '#ffffff' }}>{children}</h4>,
  h5: ({ children }) => <h5 style={{ margin: '0', padding: '0', fontSize: '1em', fontWeight: 'bold', color: '#ffffff' }}>{children}</h5>,
  h6: ({ children }) => <h6 style={{ margin: '0', padding: '0', fontSize: '0.9em', fontWeight: 'bold', color: '#ffffff' }}>{children}</h6>,
  blockquote: ({ children }) => (
    <blockquote style={{ 
      padding: '12px 16px', 
      borderLeft: '4px solid #3498db', 
      margin: '0 0 16px 0',
      backgroundColor: '#f8f9fa',
      fontStyle: 'normal',
      borderRadius: '0 4px 4px 0'
    }}>
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code style={{
      backgroundColor: '#e9ecef',
      padding: '3px 6px',
      borderRadius: '4px',
      fontSize: '0.9em',
      fontFamily: 'monospace',
      color: '#495057'
    }}>
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre style={{
      backgroundColor: '#f8f9fa',
      padding: '16px',
      borderRadius: '8px',
      margin: '0 0 16px 0',
      overflow: 'auto',
      fontSize: '0.9em',
      fontFamily: 'monospace',
      border: '1px solid #dee2e6'
    }}>
      {children}
    </pre>
  ),
  strong: ({ children }) => <strong style={{ fontWeight: 'bold', color: '#f7dc6f' }}>{children}</strong>,
  em: ({ children }) => <em style={{ fontStyle: 'italic', color: '#e0e0e0' }}>{children}</em>,
  br: () => <br style={{ margin: '0', padding: '0' }} />,
  hr: () => <hr style={{ margin: '16px 0', padding: '0', border: 'none', borderTop: '2px solid #dee2e6' }} />
};

export default function ChatMessage({ sender, text }) {
  return (
    <div className={`chat ${sender === 'bot' ? 'bot' : ''}`}>
      <img src={sender === 'bot' ? woman : man} alt='' className='chatImg' />
      <div className='txt'>
        <ReactMarkdown components={markdownComponents}>{text}</ReactMarkdown>
      </div>
    </div>
  );
}
