const apiKey = 'DhsPkpLeKzYDJfAn8_AdAQl1ndDV7ezQ6fRqO2Fytc-BHw_e2SXzV7Qoi6IBzamzSW_cN7_IwPaR9xIE8448NDK_sJN2_SCyD3O_h79CNUd4nZYGJ3Q-r9uZCs1dW3Yx';

const Yelp = {
  search: function(term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.businessess){
        return jsonResponse.businessess.map(business => ({

          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count

      }));
      }
    });
  }
};

export default Yelp;
