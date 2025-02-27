import { Provider } from 'react-redux';
import { cartStore } from './store/store.js';
import './assets/scss/all.scss'
import AppRouter from './router/index.jsx';

function App() {


  return (
    <Provider store={cartStore}>
      <AppRouter />      
    </Provider>
  )
}

export default App
