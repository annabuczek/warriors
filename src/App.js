import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import MyList from './pages/MyList/MyList';
import WarriorCreate from './pages/WarriorCreate/WarriorCreate';
import WarriorShow from './pages/WarriorShow/WarriorShow';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/mylist" exact component={MyList} />
          <Route
            path="/warriors/new"
            exact
            component={WarriorCreate}
          />
          <Route
            path="/warriors/show/:id"
            exact
            component={WarriorShow}
          />
        </div>
      </Router>
    </div>
  );
};

export default App;
