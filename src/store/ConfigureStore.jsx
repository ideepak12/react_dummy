import {createStore, applyMiddleware} from 'redux';
import RootReducer from '../reducers/RootReducer';
import thunk from 'redux-thunk';

export default function ConfigureStore() {
  return createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
}
