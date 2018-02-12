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
        ret = (
          <dl>
            <dt>Plain</dt>
            <dd>{this.props.verb}</dd>
            <dt>Negative</dt>
            <dd>{this.props.verb.replace(/る$/,'ない')}</dd>
            <dt>Polite</dt>
            <dd>{this.props.verb.replace(/る$/,'ます')}</dd>
            <dt>Polite negative</dt>
            <dd>{this.props.verb.replace(/る$/,'ません')}</dd>
            <dt>Past</dt>
            <dd>{this.props.verb.replace(/る$/,'た')}</dd>
            <dt>Past Negative</dt>
            <dd>{this.props.verb.replace(/る$/,'なかった')}</dd>
            <dt>Past Polite</dt>
            <dd>{this.props.verb.replace(/る$/,'ました')}</dd>
            <dt>Past Polite Negative</dt>
            <dd>{this.props.verb.replace(/る$/,'ませんでした')}</dd>
          </dl>
        ); break;
      case 'v5b':
        ret = (
          <dl>
            <dt>Plain</dt>
            <dd>{this.props.verb}</dd>
            <dt>Negative</dt>
            <dd>{this.props.verb.replace(/ぶ$/,'ばない')}</dd>
            <dt>Polite</dt>
            <dd>{this.props.verb.replace(/ぶ$/,'びます')}</dd>
            <dt>Polite negative</dt>
            <dd>{this.props.verb.replace(/ぶ$/,'びません')}</dd>
            <dt>Past</dt>
            <dd>{this.props.verb.replace(/ぶ$/,'びた')}</dd>
            <dt>Past Negative</dt>
            <dd>{this.props.verb.replace(/ぶ$/,'ばなかった')}</dd>
            <dt>Past Polite</dt>
            <dd>{this.props.verb.replace(/ぶ$/,'びました')}</dd>
            <dt>Past Polite Negative</dt>
            <dd>{this.props.verb.replace(/ぶ$/,'びませんでした')}</dd>
          </dl>
        ); break;
      case 'v5g':
        ret = (
          <dl>
            <dt>Plain</dt>
            <dd>{this.props.verb}</dd>
            <dt>Negative</dt>
            <dd>{this.props.verb.replace(/ぐ$/,'がない')}</dd>
            <dt>Polite</dt>
            <dd>{this.props.verb.replace(/ぐ$/,'ぎます')}</dd>
            <dt>Polite negative</dt>
            <dd>{this.props.verb.replace(/ぐ$/,'ぎません')}</dd>
            <dt>Past</dt>
            <dd>{this.props.verb.replace(/ぐ$/,'いだ')}</dd>
            <dt>Past Negative</dt>
            <dd>{this.props.verb.replace(/ぐ$/,'がなかった')}</dd>
            <dt>Past Polite</dt>
            <dd>{this.props.verb.replace(/ぐ$/,'ぎました')}</dd>
            <dt>Past Polite Negative</dt>
            <dd>{this.props.verb.replace(/ぐ$/,'ぎませんでした')}</dd>
          </dl>
        ); break;
      case 'v5k':
        ret = (
          <dl>
            <dt>Plain</dt>
            <dd>{this.props.verb}</dd>
            <dt>Negative</dt>
            <dd>{this.props.verb.replace(/く$/,'かない')}</dd>
            <dt>Polite</dt>
            <dd>{this.props.verb.replace(/く$/,'きます')}</dd>
            <dt>Polite negative</dt>
            <dd>{this.props.verb.replace(/く$/,'きません')}</dd>
            <dt>Past</dt>
            <dd>{this.props.verb.replace(/く$/,'いた')}</dd>
            <dt>Past Negative</dt>
            <dd>{this.props.verb.replace(/く$/,'かなかった')}</dd>
            <dt>Past Polite</dt>
            <dd>{this.props.verb.replace(/く$/,'きました')}</dd>
            <dt>Past Polite Negative</dt>
            <dd>{this.props.verb.replace(/く$/,'きませんでした')}</dd>
          </dl>
        ); break;
      case 'v5m':
        ret = (
          <dl>
            <dt>Plain</dt>
            <dd>{this.props.verb}</dd>
            <dt>Negative</dt>
            <dd>{this.props.verb.replace(/む$/,'まない')}</dd>
            <dt>Polite</dt>
            <dd>{this.props.verb.replace(/む$/,'みます')}</dd>
            <dt>Polite negative</dt>
            <dd>{this.props.verb.replace(/む$/,'みません')}</dd>
            <dt>Past</dt>
            <dd>{this.props.verb.replace(/む$/,'んだ')}</dd>
            <dt>Past Negative</dt>
            <dd>{this.props.verb.replace(/む$/,'まなかった')}</dd>
            <dt>Past Polite</dt>
            <dd>{this.props.verb.replace(/む$/,'みました')}</dd>
            <dt>Past Polite Negative</dt>
            <dd>{this.props.verb.replace(/む$/,'みませんでした')}</dd>
          </dl>
        ); break;
      case 'v5n':
        ret = (
          <dl>
            <dt>Plain</dt>
            <dd>{this.props.verb}</dd>
            <dt>Negative</dt>
            <dd>{this.props.verb.replace(/ぬ$/,'なない')}</dd>
            <dt>Polite</dt>
            <dd>{this.props.verb.replace(/ぬ$/,'にます')}</dd>
            <dt>Polite negative</dt>
            <dd>{this.props.verb.replace(/ぬ$/,'にません')}</dd>
            <dt>Past</dt>
            <dd>{this.props.verb.replace(/ぬ$/,'んだ')}</dd>
            <dt>Past Negative</dt>
            <dd>{this.props.verb.replace(/ぬ$/,'ななかった')}</dd>
            <dt>Past Polite</dt>
            <dd>{this.props.verb.replace(/ぬ$/,'にました')}</dd>
            <dt>Past Polite Negative</dt>
            <dd>{this.props.verb.replace(/ぬ$/,'みませんでした')}</dd>
          </dl>
        ); break;
      case 'v5r':
        ret = (
          <dl>
            <dt>Plain</dt>
            <dd>{this.props.verb}</dd>
            <dt>Negative</dt>
            <dd>{this.props.verb.replace(/る$/,'らない')}</dd>
            <dt>Polite</dt>
            <dd>{this.props.verb.replace(/る$/,'ります')}</dd>
            <dt>Polite negative</dt>
            <dd>{this.props.verb.replace(/る$/,'りません')}</dd>
            <dt>Past</dt>
            <dd>{this.props.verb.replace(/る$/,'った')}</dd>
            <dt>Past Negative</dt>
            <dd>{this.props.verb.replace(/る$/,'らなかった')}</dd>
            <dt>Past Polite</dt>
            <dd>{this.props.verb.replace(/る$/,'りました')}</dd>
            <dt>Past Polite Negative</dt>
            <dd>{this.props.verb.replace(/る$/,'りませんでした')}</dd>
          </dl>
        ); break;
      case 'v5s':
        ret = (
          <dl>
            <dt>Plain</dt>
            <dd>{this.props.verb}</dd>
            <dt>Negative</dt>
            <dd>{this.props.verb.replace(/す$/,'さない')}</dd>
            <dt>Polite</dt>
            <dd>{this.props.verb.replace(/す$/,'します')}</dd>
            <dt>Polite negative</dt>
            <dd>{this.props.verb.replace(/す$/,'しません')}</dd>
            <dt>Past</dt>
            <dd>{this.props.verb.replace(/す$/,'した')}</dd>
            <dt>Past Negative</dt>
            <dd>{this.props.verb.replace(/す$/,'さなかった')}</dd>
            <dt>Past Polite</dt>
            <dd>{this.props.verb.replace(/す$/,'しました')}</dd>
            <dt>Past Polite Negative</dt>
            <dd>{this.props.verb.replace(/す$/,'しませんでした')}</dd>
          </dl>
        ); break;
      case 'v5t':
        ret = (
          <dl>
            <dt>Plain</dt>
            <dd>{this.props.verb}</dd>
            <dt>Negative</dt>
            <dd>{this.props.verb.replace(/つ$/,'たない')}</dd>
            <dt>Polite</dt>
            <dd>{this.props.verb.replace(/つ$/,'ちます')}</dd>
            <dt>Polite negative</dt>
            <dd>{this.props.verb.replace(/つ$/,'ちません')}</dd>
            <dt>Past</dt>
            <dd>{this.props.verb.replace(/つ$/,'った')}</dd>
            <dt>Past Negative</dt>
            <dd>{this.props.verb.replace(/つ$/,'たなかった')}</dd>
            <dt>Past Polite</dt>
            <dd>{this.props.verb.replace(/つ$/,'ちました')}</dd>
            <dt>Past Polite Negative</dt>
            <dd>{this.props.verb.replace(/つ$/,'ちませんでした')}</dd>
          </dl>
        ); break;
      case 'v5u':
        ret = (
          <dl>
            <dt>Plain</dt>
            <dd>{this.props.verb}</dd>
            <dt>Negative</dt>
            <dd>{this.props.verb.replace(/う$/,'わない')}</dd>
            <dt>Polite</dt>
            <dd>{this.props.verb.replace(/う$/,'います')}</dd>
            <dt>Polite negative</dt>
            <dd>{this.props.verb.replace(/う$/,'いません')}</dd>
            <dt>Past</dt>
            <dd>{this.props.verb.replace(/う$/,'った')}</dd>
            <dt>Past Negative</dt>
            <dd>{this.props.verb.replace(/う$/,'わなかった')}</dd>
            <dt>Past Polite</dt>
            <dd>{this.props.verb.replace(/う$/,'いました')}</dd>
            <dt>Past Polite Negative</dt>
            <dd>{this.props.verb.replace(/う$/,'いませんでした')}</dd>
          </dl>
        ); break;
      default: break;
    }
    return ret;
  }
}
