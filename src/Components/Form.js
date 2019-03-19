import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  state = {
    name: '',
    phone: '',
  };
  render() {
    return (
      <div>
        <form>
          <input id="name" name="name" value={this.state.name} onChange={this.onChange} placeholder="Enter name" />
          <br />
          <input id="phone" name="phone" value={this.state.phone} onChange={this.onChange} placeholder="Enter phone" />
          <br />
          <button type="button">Add</button>
        </form>
      </div>
    );
  }
}
