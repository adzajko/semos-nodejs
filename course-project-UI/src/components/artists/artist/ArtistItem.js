import { Fragment } from 'react';
import { FaMusic, FaTimes } from 'react-icons/fa';
import { deleteArtist } from '../../../services/artists.service';

export const ArtistItem = ({ artist }) => {
  const handleDelete = () => {
    deleteArtist(artist._id).then(() => {
      console.log('deleted');
    });
  };
  return (
    <Fragment>
      <article className='artist-card'>
        <div className='artist-card__header d-flex justify-content-between'>
          <h5 className='heading-three'>{artist.name}</h5>
          <FaTimes className='delete-btn' onClick={handleDelete} />
        </div>
        <div className='artist-card__main'>
          <div className='avatar-url'>
            <img src={artist.avatarUrl} alt={artist.name} />
          </div>
        </div>
        <div className='artist-card__footer'>
          <h5 className='heading-three'>Songs</h5>
          <ul className='song-list'>
            {artist.songs.map((song, index) => (
              <li key={index} className='song-list-item'>
                <FaMusic className='primary-color' />
                {song.name}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Fragment>
  );
};
