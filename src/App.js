import React, { useState } from 'react';
import UserList from './Components/UserList';
import MessageList from './Components/MessageList';

const App = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Envoyer le message
    setMessage('');
  };

  const handleChange = event => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <UserList />
      <MessageList />
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={handleChange} />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default App;
