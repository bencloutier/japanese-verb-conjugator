import React from 'react';
import Search from './Search.jsx';
import Styles from '../styles/Styles.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="site-wrapper">
        <header className="text-center">
          <h1>Japanese Verb Conjugation Tool</h1>
          <p className="subhead">Converts regular ichidan and godan verbs into their masu form</p>
          <h2>Instructions</h2>
          <p>Type valid romaji into the box below. The list will populate with up to 10 regular ichidan or godan verbs that contain your romaji. Invalid romaji will return no results.</p>
        </header>
        <main>
          <Search/>
        </main>
        <footer>
          <p className="legal">&copy; 2018 Ben Cloutier</p>
        </footer>
      </div>
    );
  }
}
