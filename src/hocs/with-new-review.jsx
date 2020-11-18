import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const withNewReview = (WrappedComponentForm) => {
  class WithNewReview extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        id: this.props.offer.id,
        author: `Max`,
        avatar: `img/avatar-max.jpg`,
        rating: null,
        comment: null,
        date: new Date(),
      };
      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleTextAreaChange = this._handleTextAreaChange.bind(this);
    }

    _handleRatingChange(evt) {
      this.setState({rating: evt.target.value});
    }


    _handleTextAreaChange(evt) {
      this.setState({comment: evt.target.value});
    }

    render() {
      return <WrappedComponentForm
        {...this.props}
        rating={this.state.rating}
        commemt={this.state.comment}
        onRateChange={this._handleRatingChange}
        onCommentChange={this._handleTextAreaChange}
      />;
    }
  }

  WithNewReview.propTypes = {
    offer: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  };

  return WithNewReview;
};


export default withNewReview;
