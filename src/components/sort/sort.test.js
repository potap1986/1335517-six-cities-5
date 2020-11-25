import renderer from 'react-test-renderer';
import {MemoizedSort} from './sort';

describe(`<Sort /> render`, () => {

  it(`correctly renders Sort`, () => {
    const sorting = renderer
      .create(
          <MemoizedSort
            sortType={`Popular`}
            onSortTypeClick={jest.fn()}
          />)
      .toJSON();

    expect(sorting).toMatchSnapshot();
  });

});
