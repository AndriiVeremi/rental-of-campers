import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers} from './operations';

const advertsSlice = createSlice({
    name: "adverts",
    initialState: { items: [], page: 1, isLoading: false, error: null },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCampers.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(fetchCampers.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = payload;
                // state.items.push(...payload)
                // state.page = state.page + 1;
                state.error = null;
            }).addCase(fetchCampers.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    }
})

export default advertsSlice.reducer;
