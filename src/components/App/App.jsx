import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './../Header/Header';
import Main from './../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from './../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../../hoc/ProtectedRoute';
import './App.css';
import {
  PATHNAME,
  HEADER_TYPE,
  HEADER_DISPLAY,
  FOOTER_DISPLAY,
} from './../../utils/constants';
import { checkDisplayComponent } from '../../utils/utils';

const { root, movies, saved, profile, signin, signup } = PATHNAME;
const { landing, dark } = HEADER_TYPE;

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const { pathname } = useLocation();

  return (
    <div className="page">
      {checkDisplayComponent(
        HEADER_DISPLAY,
        pathname,
        <Header headerType={pathname === root ? landing : dark} />
      )}
      <Switch>
        <Route exact path={root} component={Main} />
        <ProtectedRoute component={Movies} path={movies} loggedIn={loggedIn} />
        <ProtectedRoute
          component={SavedMovies}
          path={saved}
          loggedIn={loggedIn}
        />
        <ProtectedRoute
          component={Profile}
          path={profile}
          loggedIn={loggedIn}
        />
        <Route path={signin} component={Login} />
        <Route path={signup} component={Register} />
        <Route path="*" component={NotFound} />
      </Switch>
      {checkDisplayComponent(FOOTER_DISPLAY, pathname, <Footer />)}
    </div>
  );
};

export default App;
