import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {ReviewLength} from '../const';

const withNewReview = (WrappedComponentForm) => {
  class WithNewReview extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: 0,
        review: ``,
        isError: false,
        isValid: false,
      };

      this._formRef = React.createRef();
      this._textRef = React.createRef();
      this._markRef = React.createRef();
      this._buttonRef = React.createRef();

      this._handleInputChange = this._handleInputChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(evt) {
      const {onSubmit, offer} = this.props;
      this.setState({isError: false});
      evt.preventDefault();
      if (this.state.isValid) {
        onSubmit(offer.id, {comment: this.state.review, rating: this.state.rating}, () => this._resetForm(), () => this.setState({isError: true}));
      } else {
        this._validateReview(this.state);
      }
    }

    _handleInputChange(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value,
      },
      () => this._validateReview(this.state)
      );
      this._validateReview(this.state);
    }

    _resetForm() {
      this.setState({
        rating: 0,
        review: ``,
        isValid: false,
      });
      this._markRef.current.setCustomValidity(``);
      this._textRef.current.setCustomValidity(``);
      this._formRef.current.reset();
    }

    _validateReview(state) {
      if (state.rating === 0) {
        this.setState({isValid: false});
        this._markRef.current.setCustomValidity(`Choose the mark`);
      } else {
        if (state.review.length < ReviewLength.MIN || state.review.length > ReviewLength.MAX) {
          this.setState({isValid: false});
          this._textRef.current.setCustomValidity(`Comment should be from ${ReviewLength.MIN} to ${ReviewLength.MAX} characters`);
        } else {
          this.setState({isValid: true});
          this._markRef.current.setCustomValidity(``);
          this._textRef.current.setCustomValidity(``);
          this._buttonRef.current.disabled = !this.state.isValid;
        }
      }
    }

    render() {
      return <WrappedComponentForm
        {...this.props}
        rating={this.state.rating}
        review={this.state.review}
        isValid={this.state.isValid}
        onInputChange={this._handleInputChange}
        onSubmit={this._handleSubmit}
        formRef={this._formRef}
        textRef={this._textRef}
        markRef={this._markRef}
        buttonRef={this._buttonRef}
        isError={this.state.isError}
      />;
    }
  }

  WithNewReview.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    offer: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  };

  return WithNewReview;
};


export default withNewReview;
