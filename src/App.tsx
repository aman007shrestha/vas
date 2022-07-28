import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { RoutingPages } from './routing/RoutingPages';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <div className='container'>
            <RoutingPages />
          </div>
        </Router>
      </Provider>
    </>
  );
};
export default App;
