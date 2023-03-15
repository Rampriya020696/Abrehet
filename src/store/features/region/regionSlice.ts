import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export interface RegionState {
    selectedRegion: string;
}

const initialState: RegionState = {
    selectedRegion: ''
};

export const regionSlice = createSlice({
    name: 'region',
    initialState,
    reducers: {
        updateRegion: (state, action) => {
            state.selectedRegion = action.payload
        },
    }
})

export const { updateRegion } =
    regionSlice.actions;

// Selector
export const selectRegion = state => state.region.selectedRegion;


export default regionSlice.reducer;
