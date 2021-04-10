import { useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { getSongById } from '../../../services/songs.service';

export const SongDetails = () => {
  const params = useParams();
  const [songDetails, setSongDetails] = useState({});

  useEffect(() => {
    let mounted = true;
    getSongById(params.id).then(song => {
      if (mounted) {
        setSongDetails(song);
      }
    });
    return () => (mounted = false);
  }, [params.id]);

  return (
    <Fragment>
      <div className='song-detail'>
        <div className='song-detail__header'>
          <h5 className='heading-three'>{songDetails.name}</h5>
        </div>
        <div className='song-detail__main mt-4'>
          <p className='paragraph-text mt-2'>Genre: {songDetails.genre}</p>
          <p className='paragraph-text mt-2'>
            Release Date: {new Date(songDetails.releaseDate).getFullYear()}
          </p>
        </div>
        <div className='song-detail__footer mt-4'>
          <p className='paragraph-text'>By: {songDetails.artist ? songDetails.artist.name : 'Heh'}</p>
        </div>
      </div>
    </Fragment>
  );
};
