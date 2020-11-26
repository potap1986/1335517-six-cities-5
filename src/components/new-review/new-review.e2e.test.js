import React from 'react';
import NewReview from './new-review';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
const noop = () => {};

describe(`<NewReview /> e2e testing`, () => {
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

  it(`Submitting form with all relevant data calls callback`, () => {
    const onSubmit = jest.fn().mockImplementation(() => Promise.resolve());
    const wrapper = mount(
        <NewReview
          onInputChange={noop}
          onSubmit={onSubmit}
          formRef={ref.form}
          textRef={ref.text}
          markRef={ref.mark}
          buttonRef={ref.button}
          isValid={true}
        />);

    const container = wrapper.find(`form`);
    container.simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

});
