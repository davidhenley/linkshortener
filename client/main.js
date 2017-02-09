import React from 'react';
import { render } from 'react-dom';

import { Links } from '../imports/collections/links';

import Header from './components/header';
import LinkCreate from './components/link_create';
import LinkList from './components/link_list';

const App = () => {
  return (
    <div className="app">
      <Header />
      <LinkCreate />
      <LinkList />
    </div>
  );
};

Meteor.startup(() => {
  render(<App />, document.querySelector('#root'));
});
