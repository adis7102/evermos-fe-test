import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import rootReducer from "../store";

import '../styles/globals.css';
import '../styles/ProductList.scss';
import '../styles/ProductDetail.scss';


import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
