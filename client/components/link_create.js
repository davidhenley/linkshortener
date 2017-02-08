import React, { Component } from 'react';

class LinkCreate extends Component {
  handleFormSubmit(event) {
    event.preventDefault();

    Meteor.call('links.insert', this.refs.link.value);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <div className="form-group">
          <label>Link to shorten</label>
          <input className="form-control" ref="link" />
        </div>
        <button className="btn btn-primary">Shorten</button>
      </form>
    );
  }
}

export default LinkCreate;
