import React from 'react';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import App from '../src/components/App.jsx';

describe('app', function() {
  it('renders without exploding', function() {
    var app = TestUtils.renderIntoDocument(<App/>);
    expect(app).toBeTruthy();
  });
});
