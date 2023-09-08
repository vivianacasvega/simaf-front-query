import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import AlertComponent from './components/utils/AlertComponent';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      
      <App />
      <AlertComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
