import React from 'react';
import { Link } from 'react-router-dom';
import Edict from '../edict2u.json';
import VerbTypes from './VerbTypes.jsx';
import Styles from '../styles/Styles.scss';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.parseDict = this.parseDict.bind(this);
    this.matchingVerbs = [];
  }

  parseDict() {
    this.matchingVerbs = [];
    const verbs = Edict.data;
    if (this.props.term.length > 0) {
      this.matchingVerbs = verbs.reduce((acc, cur) => {
        if (acc.length < 10 && cur.indexOf(this.props.term) > -1) {
          const val = cur.substr(cur.indexOf('[') + 1, cur.indexOf(']') - cur.indexOf('[') - 1);
          const type = VerbTypes.reduce((acc2, cur2) => {
            if(cur.indexOf(cur2 + ',') > -1 || cur.indexOf(cur2 + ')') > -1) {
              return cur2;
            };
            return acc2;
          }, '');
          if (val.indexOf('(') === -1 && val.length > 0 && type.length > 0) {
            acc.push({type, val});
          }
        }
        return acc;
      }, []);
    }
  }

  render() {
    this.parseDict();
    return (
      <div>
        { this.matchingVerbs.length > 0 ? (
          <ul>
            {
              this.matchingVerbs.map((verb, idx) => (
                <li key={idx}>
                  <Link to={`/v/${verb.val}`}>{verb.val}</Link>
                </li>
              ))
            }
          </ul>
        ) : (
          <ul>
            <li>No results.</li>
          </ul>
        )}
      </div>
    );
  }
}
