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
        rate: null,
        comment: null,
        date: new Date(),
      };
      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    }

    handleRatingChange(evt) {
      this.setState({rate: evt.target.value});
    }


    handleTextAreaChange(evt) {
      this.setState({comment: evt.target.value});
    }

    render() {
      return <WrappedComponentForm
        {...this.props}
        rate={this.state.rate}
        commemt={this.state.comment}
        onRateChange={this.handleRatingChange}
        onCommentChange={this.handleTextAreaChange}
      />;
    }
  }

  WithNewReview .propTypes = {
    offer: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  };

  return WithNewReview;
};


export default withNewReview;
