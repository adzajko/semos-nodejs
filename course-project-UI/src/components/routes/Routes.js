import { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ArtistDetails } from '../artists/artist-details/ArtistDetails';
import { Artists } from '../artists/Artists';
import { NotFound } from '../not-found/NotFound';
import { SongDetails } from '../songs/song-details/SongDetails';
import { Songs } from '../songs/Songs';

export const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/artists'></Redirect>
        </Route>
        <Route exact path='/artists' component={Artists} />
        <Route exact path='/songs' component={Songs} />
        <Route exact path='/artists/:id' component={ArtistDetails} />
        <Route exact path='/songs/:id' component={SongDetails} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};
