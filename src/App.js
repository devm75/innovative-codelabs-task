import './App.css';
import Form from './Components/Form';
import { Provider } from 'react-redux';
import { store } from './Redux';

function App() {
  
  return (

    <Provider store={store}>
      <Form />
    </Provider>
  
  );
}

export default App;
