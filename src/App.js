import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import LoginForm from './components/LoginForm';

import './App.css';

const projectID = '36e0d1e0-e5b1-4fe0-9ef0-fe3dc90bf1cd';

const App = () => {
  
  if(!localStorage.getItem('username')) return <LoginForm />
  
  return (
    <ChatEngine 
    height="100vh" 
    projectID={projectID} 
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App;
