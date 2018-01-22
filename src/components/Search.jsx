import React from 'react';
import SearchResults from './SearchResults.jsx';
import Romaji from './Romaji.jsx';
import Hiragana from './Hiragana.jsx';
import Styles from '../styles/Styles.scss';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiraganaTerm: ''
    }

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    if ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode === 8) {
      let term = document.getElementById('search').value;
      let hiraganaTerm = '';
      let characters = [];
      let done = term < 1;
      let idx1 = 0;
      let idx2 = 0;

      while (!done) {
        if (idx2 === term.length || idx2 - idx1 === 4) {
          done = true;
        }
        if (idx1 === idx2) {
          if (Romaji.indexOf(term[idx1]) > -1) {
            characters.push(Romaji[Romaji.indexOf(term[idx1])]);
            idx1++;
          }
          idx2++;
          continue;
        }
        if (idx1 !== idx2) {
          if (Romaji.indexOf(term.substr(idx1, idx2 - idx1)) > -1) {
            characters.push(Romaji[Romaji.indexOf(term.substr(idx1, idx2 - idx1))]);
            idx1 = idx2;
          } else {
            idx2++;
          }
          continue;
        }
      }

      if (characters.length > 0 && characters.join('').length === term.length) {
        if (characters.length === 1) {
          hiraganaTerm = Hiragana[characters[0]];
        } else {
          hiraganaTerm = characters.reduce((acc, cur) => {
            return acc + Hiragana[cur];
          }, '');
        }
      }

      this.setState({hiraganaTerm});
    }
  }

  render() {
    return (
      <div>
        <input id="search" placeholder="Start conjugating!" onKeyUp={this.handleKeyUp} />
        <SearchResults term={this.state.hiraganaTerm} />
      </div>
    );
  }
}
