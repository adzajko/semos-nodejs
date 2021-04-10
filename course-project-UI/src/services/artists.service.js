import axios from 'axios';
import { environment } from '../env/env';

const BASE_URL = environment.baseUrl;

/**
 * Get all the artists from the API.
 * @returns {AxiosResponse<Array>} All the artists in the DB.
 */
export const getAllArtists = () => {
  return axios.get(`${BASE_URL}/artists`);
};
/**
 *
 * @param {string} id The ID of the artist.
 * @returns {Object}
 */
export const getArtistById = id => {
  return axios.get(`${BASE_URL}/artists/id`);
};
/**
 *
 * @param {Object} info The new Artist Info.
 */
export const addArtist = info => {
  return fetch(`${BASE_URL}/artists`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(info)
  }).then(res => res.json());
};
/**
 * Update an existing artist's details.
 * @param {string} id The id of the artist to update.
 * @param {Object} info The new info for the artist.
 * @returns {JSON} Response body should be a JSON string.
 */
export const editArtist = (id, info) => {
  return axios.put(`${BASE_URL}/artists/${id}`, info, {
    headers: { 'Content-Type': 'application/json' }
  });
};
/**
 * Delete an artist.
 * @param {string} id The id of the artist to be deleted.
 * @returns {JSON} Response body should be a JSON string.
 */
export const deleteArtist = id => {
  return axios.delete(`${BASE_URL}/artists/${id}`);
};
