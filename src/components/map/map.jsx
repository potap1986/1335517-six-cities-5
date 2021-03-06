import React from "react";
import PropTypes from "prop-types";
import leaflet from 'leaflet';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this._mapContainer = React.createRef();
    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });
    this._activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [27, 39]
    });
    this._map = null;
    this._pins = [];
  }

  componentDidMount() {
    const {offers} = this.props;
    if (offers.length > 0) {
      this._renderMap(offers, this._mapContainer.current);
    }
  }

  componentDidUpdate() {
    const {offers, hoveredOffer} = this.props;
    if (offers.length > 0) {
      this._renderOffers(offers, hoveredOffer);
      this._map.setView([offers[0].hotelCity.location.lat, offers[0].hotelCity.location.lng], offers[0].hotelCity.location.zoom);
    }
  }

  _renderMap(offers, container) {
    const {hoveredOffer} = this.props;
    const city = [offers[0].hotelCity.location.lat, offers[0].hotelCity.location.lng];
    const zoom = offers[0].hotelCity.location.zoom;
    this._map = leaflet.map(container, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this._renderOffers(offers, hoveredOffer);
  }

  _renderOffers(offers, hoveredOffer) {
    this._offers = offers;
    this._hoveredOffer = hoveredOffer;

    if (this._pins.length > 0) {
      this._removeOffers();
    }

    if (this._offers) {
      this._offers
      .forEach((offer) => {
        const currentIcon = offer.id === this._hoveredOffer ? this._activeIcon : this._icon;
        this._offerMarker = leaflet
          .marker(offer.coordinates, {icon: currentIcon})
          .addTo(this._map);
        this._pins.push(this._offerMarker);
      });
    }
  }

  _removeOffers() {
    this._pins.forEach((marker) => {
      this._map.removeLayer(marker);
    });
    this._pins = [];
  }

  render() {
    return (
      <div
        style={{height: `100%`}}
        ref={this._mapContainer}
        id="map">
      </div>
    );
  }
}

Map.propTypes = {
  hoveredOffer: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    hotelCity: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }),
    }),
    previewImage: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    title: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    adults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    hotelHost: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isProUser: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    coordinates: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default Map;
