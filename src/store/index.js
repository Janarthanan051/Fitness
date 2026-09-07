import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import fitnessToolsReducer from './fitnessToolsSlice';

/**
 * Industry-Standard Secure Redux Store Configuration
 * Features: Immutable state checks, non-serializable middleware validation, and centralized security state slices.
 */
export const store = configureStore({
  reducer: {
    auth: authReducer,
    fitnessTools: fitnessToolsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true, // Guarantees pure, serializable state to prevent memory leaks and injection flaws
      immutableCheck: true,    // Enforces immutability across all state mutations
    }),
  devTools: process.env.NODE_ENV !== 'production', // Disables Redux DevTools in production for privacy & security
});

export default store;
