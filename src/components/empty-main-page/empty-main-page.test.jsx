import renderer from 'react-test-renderer';
import EmptyMainPage from './empty-main-page';

it(`Empty main page renders after relaunch`, () => {
  const emptyMainPage = renderer
    .create(<EmptyMainPage
      city={`Amsterdam`}
    />)
  .toJSON();

  expect(emptyMainPage).toMatchSnapshot();
});
