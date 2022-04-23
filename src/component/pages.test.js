import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';
import Setting from './setting';

describe('Test home component', () => {
  const store = configureStore();
  test('Test home renderer', () => {
    const tree = renderer.create(
      <Provider store={store({})}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('check setting loaded success', () => {
    const tree = renderer.create(
      <Setting />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
