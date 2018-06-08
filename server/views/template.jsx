import React from 'react';
import PropTypes from 'prop-types';

export default function Template({ body, title }) {
  return (
    <html lang="pt">
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/public/bundle.css" />
      </head>
      <body>
        <div id="root">${body}</div>
        <script src="/public/bundle.js" />
      </body>
    </html>
  );
}

Template.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

