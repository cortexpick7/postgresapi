import logo from './logo.svg';
import './App.css';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import Products from './components/Products';
import { Container } from '@material-ui/core'

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
      <Products /></Container>
    </Provider>
  );
}

export default App;
