import Nav from './components/Nav'
import Routes from './routes'
/* import BusinessProvider from './context/BusinessProvider' */
import { Provider } from 'react-redux'

import './global.scss';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Nav />
          <Routes/>
      </div>
    </Provider>
  );
}

export default App;
