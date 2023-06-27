import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchRockets = createAsyncThunk('rockets/fetchRockets', async ({ url }, thunkApi) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(`something went wrong! ${error.message}`);
  }
});

export default fetchRockets;
