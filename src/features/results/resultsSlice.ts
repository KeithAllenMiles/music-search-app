import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ResultsState {
    value: string;
}
const initialState: ResultsState = {
    value: ''
};

export const resultsSlice = createSlice({
    name: 'results',
    initialState: initialState,
    reducers: {
        updateResultsValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        } ,
    },



})




export const { updateResultsValue } = resultsSlice.actions;
export default resultsSlice.reducer;