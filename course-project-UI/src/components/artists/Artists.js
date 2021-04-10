import { Fragment, useEffect, useState } from 'react';
import { getAllArtists } from '../../services/artists.service';
import { ArtistItem } from './artist/ArtistItem';

export const Artists = () => {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    let mounted = true;
    getAllArtists().then(arts => {
      if (mounted) {
        setArtists(arts.data);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <Fragment>
      <h2 className='heading-two underline-before'>Artists</h2>
      <div className='artist-container'>
        {artists.map((artist, index) => (
          <ArtistItem key={index} artist={artist} />
        ))}
      </div>
    </Fragment>
  );
};
