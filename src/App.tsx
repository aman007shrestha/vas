import './App.css';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RoutingPages } from './routing/RoutingPages';
import { Provider } from 'react-redux';
import { store } from './store/store';

/**
 * @desc contains store, Toastify Container, Routing Component, Global Styles
 * @returns
 */
const App = () => {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <Router>
          <div>
            <RoutingPages />
          </div>
        </Router>
        <GlobalStyle />
      </Provider>
    </>
  );
};
export default App;
