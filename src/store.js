import { configureStore } from '@reduxjs/toolkit'
import FilmsListReducer from './filmFeatures/FilmList/filmsListSlice'
import FilmDetailsReducer from './filmFeatures/FilmDetailes/FilmDetailsSlice'

const store = configureStore({
	reducer: {
		filmsList: FilmsListReducer,
		filmDetails: FilmDetailsReducer,
	},
})

export default store
