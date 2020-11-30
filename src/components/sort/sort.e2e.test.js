import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoizedSort} from './sort';

configure({adapter: new Adapter()});

describe(`<Sort /> e2e testing`, () => {

  it(`Click on sort type data calls callback`, () => {
    const onSortTypeClick = jest.fn();
    const wrapper = mount(
        <MemoizedSort
          sortType={`Popular`}
          onSortTypeClick={onSortTypeClick}
        />);

    wrapper.find(`.places__sorting-type`).simulate(`click`);
    const container = wrapper.find(`.places__option--active`);

    container.simulate(`click`);
    expect(onSortTypeClick).toHaveBeenCalledTimes(1);
  });


});

