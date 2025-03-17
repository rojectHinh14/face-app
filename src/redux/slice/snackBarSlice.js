import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  open: false,
  message: null,
  type: "success",
};
export const snackBarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    openSnackBar: (state, action) => {
      state.open = true;
      state.message = action.payload.message; // action o day la action creator
      state.type = action.payload.type;
    },
    closeSnackBar : ()=>{
        return initialState;
    }
  },
});

export const { openSnackBar,closeSnackBar } = snackBarSlice.actions;
export default snackBarSlice.reducer;
