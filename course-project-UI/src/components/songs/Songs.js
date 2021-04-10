import { useState, useEffect, Fragment } from 'react';
import { getAllSongs } from '../../services/songs.service';
import { SongItem } from './song-item/SongItem';

export const Songs = () => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    let mounted = true;
    getAllSongs().then(songs => {
      if (mounted) {
        setSongs(songs);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <Fragment>
      <h2 className='heading-two underline-before'>Songs</h2>;
      <div className='songs-container'>
        {songs.map((song, index) => (
          <SongItem key={index} song={song} />
        ))}
      </div>
    </Fragment>
  );
};
