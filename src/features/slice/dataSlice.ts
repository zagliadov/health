import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';


interface IUserState {
  message: string,
  menuOpen: boolean,
}

const initialState: IUserState = {
  message: 'loading',
  menuOpen: false,
}


const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
    setMenuOpen(state, action) {
      state.menuOpen = action.payload;
    }

  },

  extraReducers: (builder) => {
    // builder
    //   .addCase(registration.pending, (state) => { state.status = 'loading'; })
    //   .addCase(registration.fulfilled, (state, { payload }) => {
    //     state.status = 'resolved';
    //     state.status = String(payload);
    //   })
    //   .addCase(registration.rejected, () => { });
  },
});

export const { setMessage, setMenuOpen } = dataSlice.actions;





export default dataSlice.reducer;