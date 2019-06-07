import React from 'react';
import './App.css';

import { Sidebar } from './containers/Sidebar'
import { MessageList } from './containers/MessageList'
import { NewMessage } from './containers/NewMessage'

function App() {
  return (
    <div id="container">
      <Sidebar />
      <section id="main">
        <MessageList />
        <NewMessage />
      </section>
    </div>
  );
}

export default App;
