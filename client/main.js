import React from 'react';
import { render } from 'react-dom';

import { Links } from '../imports/collections/links';

import Header from './components/header';
import LinkCreate from './components/link_create';

const App = () => {
  return (
    <div className="app">
      <Header />
      <LinkCreate />
    </div>
  );
};

Meteor.startup(() => {
  render(<App />, document.querySelector('#root'));
});
