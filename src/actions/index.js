import axios from 'axios';

const API_KEY = '?key=someshit123';

export const FETCH_POSTS = 'FETCH_POSTS';
const ROOT_URL = `http://reduxblog.herokuapp.com/api/posts`;


export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}
