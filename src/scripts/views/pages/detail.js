import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <h1 id="detail__restaurants">Detail</h1>
    <section class="detail__restaurant" id="detail__restaurant"></section>
    `;
  },

  async afterRender() {
    //   fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    console.log(restaurant);
    const restaurantContainer = document.querySelector('#detail__restaurant');
    const restaurantReviewContainer = document.querySelector('.post-comment');
    console.log(restaurantReviewContainer);
    const restaurantAddReviewContainer = document.querySelector('.post-comments');
    console.log(restaurantAddReviewContainer);

    restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
