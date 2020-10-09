import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Headline extends Component {
  render() {
    const { header, desc } = this.props;

    if (!header) {
      return null;
    }

    return (
      <div className="headline" data-test="headline">
        <h1 className="headline--header" data-test="headline--header">
          {header}
        </h1>
        <p className="headline--desc" data-test="headline--desc">
          {desc}
        </p>
      </div>
    )
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(PropTypes.shape({
    fName: PropTypes.string,
    desc: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    onlineStatus: PropTypes.bool
  }))
}

export default Headline;