import React, { Component } from 'react';

class Talent extends Component {
  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  render() {
    const user = {
      firstName: 'harper',
      lastName: 'perez'
    }
    return (
      <div>
        hello,{this.formatName(user)}
      </div>
    );
  }
}

export default Talent;