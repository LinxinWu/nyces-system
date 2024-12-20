import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: true,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.loading = false;
    }
  }
});

export const { setUser, setLoading, clearUser } = authSlice.actions;
export default authSlice.reducer; 