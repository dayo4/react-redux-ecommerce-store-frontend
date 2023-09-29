/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: DummySliceState = {
  user: {

  },
  categories: {

  },

}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },
})

export default counterSlice.reducer;
export const CounterSlice  = counterSlice.actions

/* Types */
export interface DummySliceState {
  // value: number
  // status: 'idle' | 'loading' | 'failed'
}