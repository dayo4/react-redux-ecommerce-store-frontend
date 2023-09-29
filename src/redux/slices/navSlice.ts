/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

/* Instruments */
// import { incrementAsync } from './thunks'

const initialState: NavSliceState = {
  status: false,
  isSmallScreen: false,
  isBigScreen: false,
}

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    showSideNAv: (state) => {
      state.status = true
    },
    hideSideNAv: (state) => {
      state.status = false
    },
    setSmallScreen: (state, action: PayloadAction<boolean>) => {
      state.isSmallScreen = action.payload
    },
    setBigScreen: (state, action: PayloadAction<boolean>) => {
      state.isBigScreen = action.payload
    },
  },
})

export default navSlice.reducer;
export const NavSlice  = navSlice.actions

/* Types */
export interface NavSliceState {
  status: boolean
  isSmallScreen: boolean
  isBigScreen: boolean
}