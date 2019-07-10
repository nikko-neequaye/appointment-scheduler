import {rootReducer} from "./rootReducer";

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = process.env.NODE_ENV === 'local' ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : ((window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  features: {
    pause: true, // start/pause recording of dispatched actions
    lock: true, // lock/unlock dispatching actions and side effects
    persist: true, // persist states on page reloading
    export: true, // export history of actions in a file
    import: false, // import history of actions from a file
    jump: false, // jump back and forth (time travelling)
    skip: false, // skip (cancel) actions
    reorder: false, // drag and drop actions in the history list
    dispatch: false, // dispatch custom actions or action creators
    test: false // generate tests for the selected actions
  }
  })) || compose);




export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
