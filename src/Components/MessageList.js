import React from 'react';

const messages = [
  { id: 1, userId: 1, text: 'Hello, how are you?' },
  { id: 2, userId: 2, text: 'I am doing well, thanks for asking.' },
  { id: 3, userId: 1, text: 'That is great to hear!' },
  { id: 4, userId: 3, text: 'Can I join the conversation?' },
];

const MessageList = () => {
  return (
    <div>
      {messages.map(message => (
        <div key={message.id}>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
