import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Template extends Component {
  constructor(args) {
    super(...args);
  }
  render() {
    return (
      <html lang="pt">
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <div id="root">{this.props.children}</div>
          <script src="/public/bundle.js" />
        </body>
      </html>
    );
  }
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

