import { configureStore } from '@reduxjs/toolkit';

import greeting from './greetings/greetings';

const store = configureStore({
  reducer: {
    greeting,
  },
});

export default store;
