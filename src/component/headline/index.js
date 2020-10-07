import React, { Component } from 'react';

class Headline extends Component {
  render() {
    const { header, desc } = this.props;

    if (!header) {
      return null;
    }

    return (
      <div class="headline" data-test="headline">
        <h1 class="headline--header" data-test="headline--header">
          {header}
        </h1>
        <p class="headline--desc" data-test="headline--desc">
          {desc}
        </p>
      </div>
    )
  }
}

export default Headline;