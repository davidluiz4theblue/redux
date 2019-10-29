import axios from 'axios';
import * as Config from '../constants/config';

export default function apiCall(endpoint, method = 'GET', body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body,
  }).catch(error => {
    console.log(error);
  });
}
//'https://5db40479a394f5001443af2b.mockapi.io/api/products'
