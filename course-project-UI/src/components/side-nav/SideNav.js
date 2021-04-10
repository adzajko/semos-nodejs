import { Link } from 'react-router-dom';
import { CreateArtist } from '../modals/create-artist/CreateArtist';
import { CreateSong } from '../modals/create-song/CreateSong';

export const SideNav = () => {
  return (
    <nav className='app-navbar'>
      <div className='app-navbar__brand'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Something_He_Can_Feel_by_Aretha_Franklin_US_vinyl.png/497px-Something_He_Can_Feel_by_Aretha_Franklin_US_vinyl.png'
          alt='Vinyl'
        />
      </div>
      <div className='app-navbar__link-container'>
        <CreateArtist />
        <Link to='/artists' className='app-navbar__link'>
          Artists
        </Link>
      </div>
      <div className='app-navbar__link-container'>
        <CreateSong />
        <Link to='/songs' className='app-navbar__link'>
          Songs
        </Link>
      </div>
    </nav>
  );
};
