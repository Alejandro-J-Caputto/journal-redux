import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import authReducer from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
export type RootState = ReturnType<typeof store.getState>
const composeEnhancers = ( window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer
})

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
  // (window as any).__REDUX_DEVTOOLS_EXTENSION__
  // && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
