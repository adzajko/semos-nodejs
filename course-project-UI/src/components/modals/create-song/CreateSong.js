import { Fragment, useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Modal, Button, Form } from 'react-bootstrap';
import { addNewSong } from '../../../services/songs.service';
import { getAllArtists } from '../../../services/artists.service';

export const CreateSong = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [artist, setArtist] = useState('');
  const [artists, setArtists] = useState([]);

  const handleOpen = () => setShow(true);
  const handleClose = () => {
    setName('');
    setGenre('');
    setReleaseDate('');
    setArtist('');
    setShow(false);
  };
  const handleSubmitForm = event => {
    event.preventDefault();
    const foundArtist = artists.find(art => art._id === artist);
    const constructedSong = {
        name: name,
        genre: genre,
        releaseDate: releaseDate,
        artist: foundArtist
    }
    addNewSong(constructedSong).then(() => {
      handleClose();
    });
  };

  useEffect(() => {
    let mounted = true;
    getAllArtists().then(data => {
      if (mounted) {
        setArtists(data.data);
      }
    });
    return () => mounted === false;
  }, [show]);

  return (
    <Fragment>
      <FaPlus className='primary-color' onClick={handleOpen} />
      <Modal show={show} onHide={handleClose} centered={true}>
        <Modal.Header closeButton>
          <Modal.Title>Create new Song</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='name'>
              <Form.Label>Song Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Song Name...'
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='genre'>
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type='text'
                placeholder='Genre...'
                value={genre}
                onChange={event => setGenre(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='releaseDate'>
              <Form.Label>Release Date</Form.Label>
              <Form.Control
                type='date'
                placeholder='Release Date'
                value={releaseDate}
                onChange={event => setReleaseDate(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='artist'></Form.Group>
            <Form.Label>Artist</Form.Label>
            <Form.Control
              as='select'
              value={artist}
              onChange={event => setArtist(event.target.value)}
            >
              {artists.map(artist => (
                <option key={artist._id} value={artist._id}>
                  {artist.name}
                </option>
              ))}
            </Form.Control>
            <Button
              variant='danger'
              type='submit'
              className='mx-auto w-50 d-block mt-5'
              onClick={event => handleSubmitForm(event)}
              disabled={name && genre && releaseDate && artist ? false : true}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};
