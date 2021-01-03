import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
import { isEmpty } from "./utils/Utils";
import { setCurrentUser, setToken } from "./components/login/LoginActions";

import { createRootReducer } from "./Reducer";

export const Root = ({ children, initialState = {} }) => {
  const history = createBrowserHistory();
  const middleware = [thunk, routerMiddleware(history)];

  const store = createStore(
    createRootReducer(history),
    initialState,
    applyMiddleware(...middleware)
  );
    !isEmpty(localStorage.getItem('token')) && store.dispatch(setToken(localStorage.getItem('token')))
    if (!isEmpty(localStorage.getItem('user'))) {
        const user = JSON.parse(localStorage.getItem('user'))
        store.dispatch(setCurrentUser(user, ""))
    }
    
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>{children}</ConnectedRouter>
    </Provider>
  );
};
