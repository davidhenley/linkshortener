import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';
import validUrl from 'valid-url';

Meteor.methods({
  'links.insert': function(url) {
    // Check to see if valid URL, kick back error if not
    check(url, Match.Where(url => validUrl.isUri(url)));

    // Save URL
    const token = Math.random().toString(36).slice(-5);
    Links.insert({ url, token, clicks: 0 });
  }
});

export const Links = new Mongo.Collection('links');
