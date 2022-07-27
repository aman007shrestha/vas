import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { RoutingPages } from './routing/RoutingPages';

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <div className='container'>
            <RoutingPages />
          </div>
        </Router>
      </AuthProvider>
    </>
  );
};
export default App;
