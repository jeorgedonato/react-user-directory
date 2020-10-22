import React from 'react';
import Home from './pages/Home';
import Search from './pages/Search';
import Wrapper from './components/Wrapper'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
