import React, { Component } from 'react';
import { Route, BrowserRouter,Switch } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Post from './Post';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
              <Route exact path='/' component={Home} />
              {/*<Route path='/about' component={About} />*/}
              <Route path='/contact' component={Contact} />
              <Route path='/:id' component={ Post } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
