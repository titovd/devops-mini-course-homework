import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import NewsBoard from './components/NewsBoard'
import Post from './components/Post'
import PostCreate from './components/PostCreate'
import Login from './components/Login'
import './App.css';

const App: React.FC = () => {
  return (
      <Router>
          <div>
            <Header/>
            <Route path="/" exact component={NewsBoard}/>
            <Route path="/post/:postId" component={Post}/>
            <Route path="/post-create" component={PostCreate}/>
            <Route path="/login" component={Login}/>
          </div>
      </Router>
  );
}

export default App;
