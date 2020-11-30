import {LoginScreen} from './login-screen';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../../store/reducers/root-reducer';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';

configure({adapter: new Adapter()});
const store = createStore(rootReducer);

describe(`<LoginScreen /> e2e testing`, () => {

  it(`Submitting form with all relevant data calls callback`, () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
        <Provider store={store}>
          <Router history={browserHistory}>
            <LoginScreen
              onSubmit={onSubmit}
            />
          </Router>
        </Provider>);


    wrapper.find(`input[type="email"]`).instance().value = `me@you.he`;
    wrapper.find(`input[type="password"]`).instance().value = `123`;

    const container = wrapper.find(`form`);

    container.simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmit).toHaveBeenCalledWith({
      email: `me@you.he`,
      password: `123`,
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

});
