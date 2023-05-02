import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../features/Messages";
import gameService from "../../services/games.service";

//Get games data
export const getClientInputs = createAsyncThunk(
  "games/getGames",
  async (zipCode, thunkAPI) => {
    try {
      const response = await gameService.getGamesData(zipCode);
      //console.log(response)
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data
    } catch (error) {
      console.log(error)
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

//Update Client Input Data
export const updateClientInputs = createAsyncThunk(
  "clientInputs/postClientInputData",
  async (postClientData , thunkAPI) => {
    try {
      const data = await gameService.postData(postClientData);
      thunkAPI.dispatch(setMessage(""));
      console.log(data)
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

//define initial states
const initialState = {
  clientInputsD11: 0,
  loading: false,
}

export const clientInputSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    clientInputsD11(state, action) {
      console.log("-----first------", action)
      state.clientInputsD11 = parseFloat(action.payload)
    },
  },
  extraReducers: {
    [getClientInputs.pending]: (state) => {
      state.loading = true
    },
    [getClientInputs.fulfilled]: (state, { payload }) => {
      console.log("---------get client Input Data -----------", payload.data.clientInputs)
      state.loading = false
      state.clientInputsD11 = payload.data.clientInputs.clientInputsD11
     
    },
    [getClientInputs.rejected]: (state) => {
      state.loading = false
    },
  },
})


const { reducer } = clientInputSlice;
export default reducer;
export const { clientInputsGrowthRate, clientInputsCAGR, clientInputsD11, clientInputsD12, clientInputsD13, clientInputsE11, clientInputsE12, clientInputsF11, clientInputsH16, clientInputsH17, clientInputsH18, clientInputsH19, clientInputsH20, clientInputsH21, clientInputsH22, clientInputsH23, clientInputsH24, clientInputsH25, clientInputsH26, clientInputsH27, clientInputsH30, clientInputsH31, clientInputsH32, clientInputsH33, clientInputsH36, clientInputsH37, clientInputsH38, clientInputsH41, } = clientInputSlice.actions
