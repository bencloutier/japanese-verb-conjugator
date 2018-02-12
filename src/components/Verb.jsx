import React from 'react';
import Edict from '../edict2u.json';
import VerbTypes from './VerbTypes.jsx';
import Styles from '../styles/Styles.scss';

export default class Verb extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const type = Edict.data.reduce((acc, cur) => {
      if (cur.indexOf(this.props.verb) > -1) {
        return acc + VerbTypes.reduce((acc2, cur2) => {
          if(cur.indexOf(cur2 + ',') > -1 || cur.indexOf(cur2 + ')') > -1) {
            return cur2;
          };
          return acc2;
        }, '');
      } else {
        return acc + '';
      }
    }, '');
    let ret;
    switch (type) {
      case 'v1':
        ret = this.props.verb + ' => ' + this.props.verb.replace(/る$/,'ます'); break;
      case 'v5b':
        ret = this.props.verb + ' => ' + this.props.verb.replace(/ぶ$/,'びます'); break;
      case 'v5g':
        ret = this.props.verb + ' => ' + this.props.verb.replace(/ぐ$/,'ぎます'); break;
      case 'v5k':
        ret = this.props.verb + ' => ' + this.props.verb.replace(/く$/,'きます'); break;
      case 'v5m':
        ret = this.props.verb + ' => ' + this.props.verb.replace(/む$/,'みます'); break;
      case 'v5n':
        ret = this.props.verb + ' => ' + this.props.verb.replace(/ぬ$/,'にます'); break;
      case 'v5r':
        ret = this.props.verb + ' => ' + this.props.verb.replace(/る$/,'ります'); break;
      case 'v5s':
        ret = this.props.verb + ' => ' + this.props.verb.replace(/す$/,'します'); break;
      case 'v5t':
        ret = this.props.verb + ' => ' + this.props.verb.replace(/つ$/,'ちます'); break;
      case 'v5u':
        ret = this.props.verb + ' => ' + this.props.verb.replace(/う$/,'います'); break;
      default: break;
    }
    return (
      <p>{ret}</p>
    );
  }
}
