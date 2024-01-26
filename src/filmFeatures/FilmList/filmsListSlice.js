import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../requester';
import { getFilmsBySearchAPI } from './filmsListAPI';

const initialState = {
  list: [],
  isLoading: false,
  error: {},
};

export const getFilms = createAsyncThunk('filmsList/getFilms', async () => {
  const response = await API.get('api/v2.2/films/top', {
    params: { type: 'TOP_100_POPULAR_FILMS' },
  });
  return response.data;
});

export const getFilmsBySearch = createAsyncThunk(
  'filmsList/getFilmsBySearch',
  getFilmsBySearchAPI
);

const filmsListSlice = createSlice({
  name: 'filmsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFilms.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFilms.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload.films;
    });
    builder.addCase(getFilms.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });

    builder.addCase(getFilmsBySearch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFilmsBySearch.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.list = actions.payload.films;
    });
  },
});

export const { increment, decrement } = filmsListSlice.actions;

export default filmsListSlice.reducer;
