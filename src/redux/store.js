import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

const selectRockets = (store) => store.rockets;

export { selectRockets };

export default store;
