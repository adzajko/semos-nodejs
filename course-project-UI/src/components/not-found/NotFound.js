import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Fragment>
      <div className='not-found-container'>
        <h2 className='heading-two'>Nothing was found.</h2>
        <Link className='app-btn' to='/'>
          Home
        </Link>
      </div>
    </Fragment>
  );
};
