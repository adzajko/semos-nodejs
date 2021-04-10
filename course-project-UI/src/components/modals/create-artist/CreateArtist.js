import { Fragment, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Modal, Button, Form } from 'react-bootstrap';
import { addArtist } from '../../../services/artists.service';

export const CreateArtist = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const handleOpen = () => setShow(true);
  const handleClose = () => {
    setName('');
    setAvatarUrl('');
    setShow(false);
  };
  const handleSubmitForm = event => {
    event.preventDefault();
    addArtist({ name: name, avatarUrl: avatarUrl, songs: [] }).then(() => {
      handleClose();
    });
  };

  return (
    <Fragment>
      <FaPlus className='primary-color' onClick={handleOpen} />
      <Modal show={show} onHide={handleClose} centered={true}>
        <Modal.Header closeButton>
          <Modal.Title>Create new Artist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='name'>
              <Form.Label>Artist Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Artist Name...'
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='avatarUrl'>
              <Form.Label>Avatar URL</Form.Label>
              <Form.Control
                type='text'
                placeholder='Image...'
                value={avatarUrl}
                onChange={event => setAvatarUrl(event.target.value)}
              />
            </Form.Group>
            <Button
              variant='danger'
              type='submit'
              className='mx-auto w-50 d-block'
              onClick={event => handleSubmitForm(event)}
              disabled={name && avatarUrl ? false : true}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};
