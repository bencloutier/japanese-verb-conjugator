import React from 'react';
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
              this.matchingVerbs.map((verb, idx) => {
                let ret;
                switch (verb.type) {
                  case 'v1':
                    ret = verb.val + ' => ' + verb.val.replace(/る$/,'ます'); break;
                  case 'v5b':
                    ret = verb.val + ' => ' + verb.val.replace(/ぶ$/,'びます'); break;
                  case 'v5g':
                    ret = verb.val + ' => ' + verb.val.replace(/ぐ$/,'ぎます'); break;
                  case 'v5k':
                    ret = verb.val + ' => ' + verb.val.replace(/く$/,'きます'); break;
                  case 'v5m':
                    ret = verb.val + ' => ' + verb.val.replace(/む$/,'みます'); break;
                  case 'v5n':
                    ret = verb.val + ' => ' + verb.val.replace(/ぬ$/,'にます'); break;
                  case 'v5r':
                    ret = verb.val + ' => ' + verb.val.replace(/る$/,'ります'); break;
                  case 'v5s':
                    ret = verb.val + ' => ' + verb.val.replace(/す$/,'します'); break;
                  case 'v5t':
                    ret = verb.val + ' => ' + verb.val.replace(/つ$/,'ちます'); break;
                  case 'v5u':
                    ret = verb.val + ' => ' + verb.val.replace(/う$/,'います'); break;
                  default: break;
                }
                return (<li key={idx}>{ret}</li>);
              })
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
