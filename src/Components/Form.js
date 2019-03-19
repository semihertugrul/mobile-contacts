import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <input id="name" name="name" placeholder="Enter name" />
          <br />
          <input id="phone" name="phone" placeholder="Enter phone" />
          <br />
          <button type="button">Add</button>
        </form>
      </div>
    );
  }
}
