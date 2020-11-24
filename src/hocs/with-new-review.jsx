import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const withNewReview = (WrappedComponentForm) => {
  class WithNewReview extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: null,
        review: null,
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
      evt.preventDefault();
      if (this.state.isValid) {
        onSubmit(offer.id, {comment: this.state.review, rating: this.state.rating});
        this._resetForm();
      } else {
        this._validateReview(this.state);
      }
    }

    _handleInputChange(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value,
      });
      this._validateReview(this.state);
    }

    _resetForm() {
      this.setState({
        rating: null,
        review: null,
        isValid: false,
      });
      this._markRef.current.setCustomValidity(``);
      this._textRef.current.setCustomValidity(``);
      this._formRef.current.reset();
    }

    _validateReview(state) {
      if (state.rating === null) {
        this.setState({isValid: false});
        this._markRef.current.setCustomValidity(`Choose the mark`);
      } else {
        if (state.review.length < 50 || state.review.length > 300) {
          this.setState({isValid: false});
          this._textRef.current.setCustomValidity(`Comment should be from 50 to 300 characters`);
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
