import React from 'react';
import NavBar from './components/common/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostPage from './components/posts/PostPage';
import PostList from './components/posts/PostList';
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/register/RegisterPage';







function App() {


  return (

    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        
        <Switch>
          <Route path="/" exact component={PostList}></Route>
          <Route path="/posts/:postId" exact component={PostPage}></Route>
          <Route path="/login" exact component={LoginPage}></Route>
          <Route path="/register" exact component={RegisterPage}></Route>
        </Switch>
      </BrowserRouter>


    </React.Fragment>
  );
}


export default App;
