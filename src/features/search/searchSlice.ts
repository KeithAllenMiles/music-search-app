import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchState {
    value: string;
}
const initialState: SearchState = {
    value: ''
};

export const searchSlice = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        updateSearchValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        } ,
    },



})



export const { updateSearchValue } = searchSlice.actions;

export default searchSlice.reducer;