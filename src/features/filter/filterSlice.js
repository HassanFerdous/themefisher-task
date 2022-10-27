import { createSlice } from '@reduxjs/toolkit';

//initial_state
const initialState = {
	search: '',
	tags: [],
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		addFilter: (state, action) => {
			let existedFilter = state.tags.find((tag) => tag.id === action?.payload?.id);
			if (existedFilter) return state;
			state.tags.push(action.payload);
		},
		removeFilter: (state, action) => {
			state.tags = state.tags.filter((tag) => tag.id !== action.payload?.id);
		},
		clearFilter: (state) => {
			state.tags = [];
		},

		//search
		searched: (state, action) => {
			state.search = action.payload;
		},
		clearSearch: (state) => {
			state.search = '';
		},
	},
});

export default filterSlice.reducer;
export const { addFilter, removeFilter, clearFilter, searched, clearSearch } = filterSlice.actions;
