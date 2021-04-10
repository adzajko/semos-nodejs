import { environment } from '../env/env';

const BASE_URL = environment.baseUrl;

/**
 * Get all Songs.
 * @returns {Promise<Array>} List of all songs.
 */
export const getAllSongs = () => {
  return fetch(`${BASE_URL}/songs`).then(res => res.json());
};

/**
 * Get a single song by ID.
 * @param {String} id The ID of the song.
 * @returns {Promise<Object>} The song.
 */
export const getSongById = id => {
  return fetch(`${BASE_URL}/songs/${id}`).then(res => res.json());
};

/**
 * Add a new song.
 * @param {*} song The song details
 * @returns {Promise<String>} A confirmation message that the song was added.
 */
export const addNewSong = song => {
  return fetch(`${BASE_URL}/songs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(song)
  }).then(res => res.json());
};

/**
 * Edit a song.
 * @param {String} id The ID of the song.
 * @param {*} song The new song info.
 * @returns {Promise<String>} Confirmation message.
 */
export const editSong = (id, song) => {
  return fetch(`${BASE_URL}/songs/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(song)
  }).then(res => res.json());
};

/**
 * Delete a song by ID.
 * @param {String} id Delete a song by its ID.
 * @returns {Promise<String>} Confirmation message.
 */
export const deleteSong = id => {
  return fetch(`${BASE_URL}/songs/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json());
};
