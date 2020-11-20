export const adaptOfferToClient = (offer) => {
  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        hotelCity: {
          name: offer.city.name,
          location: {
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
            zoom: offer.city.location.zoom
          }
        },
        previewImage: offer.preview_image,
        isFavorite: offer.is_favorite,
        isPremium: offer.is_premium,
        adults: offer.max_adults,
        hotelHost: {
          id: offer.host.id,
          name: offer.host.name,
          isProUser: offer.host.is_pro,
          avatar: offer.host.avatar_url
        },
        coordinates: {
          lat: offer.location.latitude,
          lng: offer.location.longitude,
          zoom: offer.location.zoom
        },

      }
  );

  delete adaptedOffer.city;
  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.host;
  delete adaptedOffer.location;

  return adaptedOffer;
};

export const adaptOffersToServer = (offer) => {
  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        "city": {
          "location": {
            "latitude": offer.hotelCity.location.lat,
            "longitude": offer.hotelCity.location.lng,
            "zoom": offer.hotelCity.location.zoom
          },
          "name": offer.hotelCity.name
        },
        "host": {
          "avatar_url": offer.hotelHost.avatar,
          "id": offer.hotelHost.id,
          "is_pro": offer.hotelHost.isProUser,
          "name": offer.hotelHost.name
        },
        "is_favorite": offer.isFavorite,
        "is_premium": offer.isPremium,
        "location": {
          "latitude": offer.coordinates.lat,
          "longitude": offer.coordinates.lng,
          "zoom": offer.cordinates.zoom
        },
        "max_adults": offer.abults,
        "preview_image": offer.previewImage,
      }
  );

  delete adaptedOffer.hotelCity;
  delete adaptedOffer.previewImage;
  delete adaptedOffer.isFavorite;
  delete adaptedOffer.isPremium;
  delete adaptedOffer.adults;
  delete adaptedOffer.hotelHost;
  delete adaptedOffer.coordinates;

  return adaptedOffer;
};

export const adaptReviewToClient = (review) => {
  const adaptedReview = Object.assign(
      {},
      review,
      {
        localUser: {
          id: review.user.id,
          name: review.user.name,
          isPro: review.user.is_pro,
          avatarUrl: review.user.avatar_url
        },
      }
  );

  delete adaptedReview.user;

  return adaptedReview;
};

