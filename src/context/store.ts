/* Redux */
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

/* Slices */
import { userSlice } from '@/apps/Users/context';
import { productSlice, categorySlice } from '@/apps/Products/context';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    products: productSlice.reducer,
    categories: categorySlice.reducer,
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
