import React from "react";
import Home from "./pages/Home";
// import Search from "./pages/Search";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  //Change the React Title
  document.title = "User Directory";
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/search" component={Search} /> */}
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
