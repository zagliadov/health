import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';


interface IUserState {
  message: string,
}

const initialState: IUserState = {
  message: 'loading',
}


const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
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

export const { setMessage } = dataSlice.actions;





export default dataSlice.reducer;