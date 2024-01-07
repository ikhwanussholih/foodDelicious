import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async listRestaurant() {
    const response = await fetch('/data/DATA.json');
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async reviewRestaurant(data) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  }

  static async detailRestaurant(id) {
    const response = await fetch('/data/DATA.json');
    const responseJson = await response.json();
    const data = [];
    const restaurant = [];
    data.push(responseJson.restaurants);

    data[0].forEach((res) => {
      if (res.id === id) {
        restaurant.push(res);
      }
    });

    return restaurant[0];
  }

  static async searchRestaurant(name) {
    const response = await fetch('/data/DATA.json');
    const responseJson = await response.json();
    const data = [];
    const restaurants = [];
    data.push(responseJson.restaurants);

    const searchParams = name.toLowerCase();

    data[0].filter((res) => {
      restaurants.push(res.name.toLowerCase().includes(searchParams));

      return restaurants[0];
    });

    return 'tidak ketemu';
  }
}

export default RestaurantSource;
