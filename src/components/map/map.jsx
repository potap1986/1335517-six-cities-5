import React from "react";
import PropTypes from "prop-types";
import 'leaflet/dist/leaflet.css';
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
    this._renderMap();
  }

  componentDidUpdate() {
    this._renderOffers();
  }

  _renderMap() {
    const city = [52.38333, 4.9];

    const zoom = 12;
    this._map = leaflet.map(`map`, {
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

    this._renderOffers();
  }

  _renderOffers() {
    const {offers, hoveredOffer} = this.props;
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
  offers: PropTypes.array.isRequired,
};

export default Map;
