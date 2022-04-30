import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  // const [user, setUser] = useState(null); ->Now not in use
  const[{user}, dispatch]=useStateValue();


  return (
    <div className="App">

      <Router>

        {!user ? (
          <Login />
        ) : (



          <>
            <Header />

            <div className='app__body'>
              {/* Side bar */}
              <Sidebar />

              {/* React-Router  -> Chat screen */}

              <Switch>

                <Route path="/room/:roomId">
                  <Chat />
                </Route>

                <Route path="/">
                  <h1>Welcome to Home :)</h1>
                </Route>

              </Switch>

            </div>
          </>
        )}
      </Router >

    </div>
  );
}

export default App;
