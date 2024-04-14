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
                // state.items.push(payload);
                state.page = 1;
                state.error = null;
            }).addCase(fetchCampers.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    }
})

export default advertsSlice.reducer;

//-----------------------------------------------------------------------------------------

// const status = {
//   PENDING: 'pending',
//   FULFILLED: 'fulfilled',
//   REJECTED: 'rejected',
// };

// const thunks = [fetchCampers, loadMoreCampers];

// const createStatus = status => isAnyOf(...thunks.map(el => el[status]));

// //-------------------

// const pendingAction = state => {
//   state.isLoading = true;
//   state.error = null;
// };

// const fulfilledAction = state => {
//   state.isLoading = false;
//   state.error = null;
// };

// const rejectedAction = (state, { payload }) => {
//   state.error = payload.message;
//   state.isLoading = false;
// };

// //-------------------

// const handleFulfilledGet = (state, { payload }) => {
//   state.items = payload;
//   // state.items.push(payload);
// };

// //-----------------------

// const advertsSlice = createSlice({
//   name: 'adverts',
//   initialState: {
//     items: [],
//     page: 1,
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder => {
//     const { PENDING, FULFILLED, REJECTED } = status;
//     builder
//       .addCase(fetchCampers.fulfilled, handleFulfilledGet)
//       .addMatcher(createStatus(PENDING), pendingAction)
//       .addMatcher(createStatus(FULFILLED), fulfilledAction)
//       .addMatcher(createStatus(REJECTED), rejectedAction);
//   },
// });

// export default advertsSlice.reducer;
