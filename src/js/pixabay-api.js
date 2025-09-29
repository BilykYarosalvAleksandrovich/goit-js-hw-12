import axios from 'axios';

const API_KEY = '52509329-ddcf2edcf50d80102bc7df96b';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: 15,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
