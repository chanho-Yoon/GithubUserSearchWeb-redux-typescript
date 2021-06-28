import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './assets/styles/global-styles';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './modules/index';

const store = createStore(rootReducer);

ReactDOM.render(
   <>
      <GlobalStyle></GlobalStyle>
      <Provider store={store}>
         <App />
      </Provider>
   </>,
   document.getElementById('root')
)
;

reportWebVitals();
