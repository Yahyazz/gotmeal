import API_ENDPOINT from '../globals/api-endpoint';

const DicodingDbSource = {
  async homeRestaurant() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  },

  async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  },
};

export default DicodingDbSource;
