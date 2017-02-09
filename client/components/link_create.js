import React, { Component } from 'react';

class LinkCreate extends Component {
  constructor() {
    super();
    this.state = { error: '' }
  }

  handleFormSubmit(event) {
    event.preventDefault();

    Meteor.call('links.insert', this.refs.link.value, (error) => {
      if (error) {
        this.setState({ error: 'Enter a valid URL' });
      } else {
        this.setState({ error: '' });
        this.refs.link.value = '';
      }
    });
  }

  render() {
    return (
      <div className="link-create container">
        <div className="col-sm-3">
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <div className="form-group">
              <label>Link to shorten</label>
              <input className="form-control" ref="link" />
            </div>
            <div className="text-danger">{this.state.error}</div>
            <button className="btn btn-primary">Shorten</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LinkCreate;
