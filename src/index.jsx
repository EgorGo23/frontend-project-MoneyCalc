import React from 'react';
import ReactDOM from 'react-dom';
import '../public/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import rootReducer from './reducers/calcReducer';
import loadState from './localStorageFunctions/loadState';
import saveState from './localStorageFunctions/saveState';

const persistedState = loadState();

const middleware = (state) => (next) => (action) => {
  const result = next(action);
  saveState(state.getState());
  return result;
};

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(middleware),
);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
