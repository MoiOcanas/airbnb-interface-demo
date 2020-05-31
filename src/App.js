import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import StayDetails from './components/StayDetails/StayDetails'

const App = () => (
  <Router>
    <div>
      <Navbar />
       <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/stay/:id" component={StayDetails} />
        </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
