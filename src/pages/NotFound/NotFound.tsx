import { Link } from 'react-router-dom';
import * as React from 'react';

const NotFound: React.FC = () => (
  <React.Fragment>
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold text-main">404</h1>
      <p className="text-4xl font-medium text-secondary">
        Page Not Found
      </p>
      <Link to='/' className="mt-4 text-xl text-blue-600 hover:underline">
        Go Back to Home Page
      </Link>
    </div>
  </React.Fragment>
);

export default NotFound