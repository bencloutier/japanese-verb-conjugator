import React from 'react';
import Rx from 'rxjs/Rx';
import SearchResults from './SearchResults.jsx';
import Hiragana from './Hiragana.jsx';
import Styles from '../styles/Styles.scss';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiraganaTerm: ''
    }
  }

  componentDidMount() {
    const searchKeyUp = Rx.Observable.fromEvent(document.getElementById('search'), 'keyup');
    searchKeyUp.filter(e => e.keyCode <= 37 || e.keyCode >= 40)
      .subscribe(() => {
        let term = document.getElementById('search').value;
        let hiraganaTerm = '';
        let characters = [];
        let done = term.length < 1;
        let idx1 = 0;
        let idx2 = 0;

        while (!done) {
          if (idx2 === term.length || idx2 - idx1 === 4) {
            done = true;
          }
          if (idx1 === idx2) {
            if (Object.keys(Hiragana).indexOf(term[idx1]) > -1) {
              characters.push(term[idx1]);
              idx1++;
            }
            idx2++;
            continue;
          }
          if (idx1 !== idx2) {
            if (Object.keys(Hiragana).indexOf(term.substr(idx1, idx2 - idx1)) > -1) {
              characters.push(term.substr(idx1, idx2 - idx1));
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
      });
  }

  render() {
    return (
      <div>
        <input id="search" placeholder="Start conjugating!" />
        <SearchResults term={this.state.hiraganaTerm} />
      </div>
    );
  }
}
