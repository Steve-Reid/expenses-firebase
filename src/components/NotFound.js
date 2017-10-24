import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <div>Oops! - Sorry, but we could not find the page you are looking for</div>
    <div>
      404! - <Link to="/">Go Home</Link>
    </div>
  </div>
);

export default NotFound;
