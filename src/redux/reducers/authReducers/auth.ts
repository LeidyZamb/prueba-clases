import { AuthState, User } from './auth.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
  status: 'not-authenticated',
  user: {
    email: '',
    firstname: '',
    lastname:'',
  },
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setAuthtentication: (state: AuthState, action: PayloadAction<'cheking' | 'not-authenticated' | 'authenticated'>) => {
      state.status = action.payload;
    },
    setUser: (state: AuthState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

const authReducer = authSlice.reducer;
export const {setAuthtentication, setUser} = authSlice.actions;
export default authReducer;
