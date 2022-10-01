import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import greetingReducer from './greetings/greetings';

const store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
  middleware: [thunk],
});

export default store;
