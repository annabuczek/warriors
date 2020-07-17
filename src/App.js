import React, { useEffect } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchWarriors } from './redux/warriors/actions';
import history from './history';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import MyList from './pages/MyList/MyList';
import WarriorCreate from './pages/WarriorCreate/WarriorCreate';
import WarriorShow from './pages/WarriorShow/WarriorShow';

import './App.scss';

const App = ({ fetchWarriors, localStorage }) => {
  useEffect(() => {
    const currentDate = moment().format();
    const { updateDate } = localStorage;
    if (!updateDate || currentDate >= updateDate) {
      fetchWarriors();
    }
  });

  return (
    <div className="App">
      <Router history={history}>
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

export default connect(({ localStorage }) => ({ localStorage }), {
  fetchWarriors,
})(App);
