/* Redux */
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

/* Slices */
import { authSlice } from '@/apps/Users/context';
import { productSlice } from '@/apps/Products/context';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    products: productSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
