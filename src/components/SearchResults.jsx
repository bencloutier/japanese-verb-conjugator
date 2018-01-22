import React from 'react';
import Edict from '../edict2u.json';
import Styles from '../styles/Styles.scss';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const verbs = Edict.data;
    let matchingVerbs = [];
    if (this.props.term.length > 0) {
      matchingVerbs = verbs.reduce((acc, cur) => {
        if (acc.length < 10 && cur.indexOf(this.props.term) > -1) {
          const val = cur.substr(cur.indexOf('[') + 1, cur.indexOf(']') - cur.indexOf('[') - 1);
          let type = '';
          if (cur.indexOf('v1,') > -1 || cur.indexOf('v1)') > -1) {
            type = 'v1';
          } else if (cur.indexOf('v5b,') > -1 || cur.indexOf('v5b)') > -1) {
            type = 'v5b';
          } else if (cur.indexOf('v5g,') > -1 || cur.indexOf('v5g)') > -1) {
            type = 'v5g';
          } else if (cur.indexOf('v5k,') > -1 || cur.indexOf('v5k)') > -1) {
            type = 'v5k';
          } else if (cur.indexOf('v5m,') > -1 || cur.indexOf('v5m)') > -1) {
            type = 'v5m';
          } else if (cur.indexOf('v5n,') > -1 || cur.indexOf('v5n)') > -1) {
            type = 'v5n';
          } else if (cur.indexOf('v5r,') > -1 || cur.indexOf('v5r)') > -1) {
            type = 'v5r';
          } else if (cur.indexOf('v5s,') > -1 || cur.indexOf('v5s)') > -1) {
            type = 'v5s';
          } else if (cur.indexOf('v5t,') > -1 || cur.indexOf('v5t)') > -1) {
            type = 'v5t';
          } else if (cur.indexOf('v5u,') > -1 || cur.indexOf('v5u)') > -1) {
            type = 'v5u';
          }
          if (val.indexOf('(') === -1 && val.length > 0 && type.length > 0) {
            acc.push({
              type, val
            });
          }
        }
        return acc;
      }, []);
    }

    return (
      <div>
        { matchingVerbs.length > 0 ? (
          <ul>
            {
              matchingVerbs.map(verb => {
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
                return (<li>{ret}</li>);
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
