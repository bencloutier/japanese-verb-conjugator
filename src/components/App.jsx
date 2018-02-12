import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './Search.jsx';
import Verb from './Verb.jsx';
import Styles from '../styles/Styles.scss';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="site-wrapper">
          <Route exact path="/" render={() => (
            <div>
              <header className="text-center">
                <h1>Japanese Verb Conjugation Tool</h1>
                <p className="subhead">Converts regular ichidan and godan verbs into their masu form</p>
                <h2>Instructions</h2>
                <p>Type valid romaji into the box below. The list will populate with up to 10 regular ichidan or godan verbs that contain your romaji. Invalid romaji will return no results.</p>
              </header>
              <main>
                <Search/>
              </main>
            </div>
          )} />
          <Route path="/v/:verb" render={({ match }) => (
            <div>
              <header className="text-center">
                <h1>Japanese Verb Conjugation Tool</h1>
                <h2>{match.params.verb}</h2>
                <Verb verb={match.params.verb} />
              </header>
            </div>
          )} />
          <footer>
            <p className="legal">&copy; 2018 Ben Cloutier</p>
          </footer>
        </div>
      </Router>
    );
  }
}
