import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}list`,
  REVIEW: `${CONFIG.BASE_URL}review`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH: (name) => `${CONFIG.BASE_URL}?search=${name}`,
};

export default API_ENDPOINT;
