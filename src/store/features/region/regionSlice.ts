import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export interface RegionState {
    selectedRegion: string;
    regionCurrency: string;
}

const initialState: RegionState = {
    selectedRegion: '',
    regionCurrency: '$'
};

export const regionSlice = createSlice({
    name: 'region',
    initialState,
    reducers: {
        updateRegion: (state, action) => {
            state.regionCurrency = action.payload === "global" ? '$' : "€"
            state.selectedRegion = action.payload
        },
    }
})

export const { updateRegion } =
    regionSlice.actions;

// Selector
export const selectRegion = state => state.region.selectedRegion;
export const selectRegionCurrency = state => state.region.regionCurrency;


export default regionSlice.reducer;
