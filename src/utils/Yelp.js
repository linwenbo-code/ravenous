const apiKey = 'KDiZYPYsHFZ_BIcGIz0z73RQCVFJs7Bq9tYLLeq9tBnpFmGNpvl1Ji6McnfckmfAGhnSKnn58FkGOT1MG_fuMZcmx09N3oKnlAGfuCm1nBjBFt0IEr5usI7WMKocYHYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            { headers: {
                Authorization: `Bearer ${apiKey}`,
                }}).then((response) => {
                    return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        })
    }
};

export default Yelp;