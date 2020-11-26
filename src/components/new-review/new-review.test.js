import React from 'react';
import renderer from 'react-test-renderer';
import NewReview from './new-review';

const noop = () => {};

describe(`<NewReview /> render`, () => {

  it(`correctly renders NewReview`, () => {
    const ref = {
      form: {
        current: document.createElement(`form`),
      },
      text: {
        current: document.createElement(`input`),
      },
      mark: {
        current: document.createElement(`input`),
      },
      button: {
        current: document.createElement(`button`),
      },
    };

    const tree = renderer
      .create(
          <NewReview
            onInputChange={noop}
            onSubmit={noop}
            formRef={ref.form}
            textRef={ref.text}
            markRef={ref.mark}
            buttonRef={ref.button}
            isValid={true}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
