import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../requester';

const initialState = {
  currentFilm: {},
  isLoading: false,
  awards: [],
  facts: [],
};

export const getFilmDetails = createAsyncThunk('FilmDetails', async (id) => {
  const response = await API.get(`api/v2.2/films/${id}`);
  return response.data;
});

export const getFilmFacts = createAsyncThunk('FilmFacts', async (id) => {
  try {
    const response = await API.get(`api/v2.2/films/${id}/facts`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch film facts');
  }
});

export const getFilmAwards = createAsyncThunk('FilmAwards', async (id) => {
  console.log('id: ', id);
  const response = await API.get(`api/v2.2/films/${id}/awards`);
  return response.data;
});

export const getFilmVdeo = createAsyncThunk('FilmVideo', async (id) => {
  console.log('id: ', id);
  const response = await API.get(`api/v2.2/films/${id}/video`);
  return response.data;
});

const filmDetailsSlice = createSlice({
  name: 'filmDetails',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getFilmDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFilmDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentFilm = action.payload;
    });
    builder.addCase(getFilmFacts.fulfilled, (state, action) => {
      state.facts = action.payload;
    });
    builder.addCase(getFilmAwards.fulfilled, (state, action) => {
      state.awards = action.payload.items;
    });
    builder.addCase(getFilmVdeo.fulfilled, (state, action) => {
      state.video = action.payload;
    });
  },
});

export default filmDetailsSlice.reducer;
