import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export const SongItem = ({ song }) => {
  return (
    <Fragment>
      <div className='song-item'>
        <h5 className='heading-three'>{song.name}</h5>
        <Link className='app-btn' to={`/songs/${song._id}`}>
          <FaArrowRight />
        </Link>
      </div>
    </Fragment>
  );
};
