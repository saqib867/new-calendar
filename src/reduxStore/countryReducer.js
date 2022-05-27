import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    apiResponse:[],
    year: '',
    month: '',
    
       
  },
  reducers: {
    selectCountry: (state,action) => {
           state.apiResponse=action.payload       
    },
    selectYear: (state, action) => {
        state.year=action.payload
    },
   
    
   
  }
})

// Action creators are generated for each case reducer function
export const { selectCountry,selectYear,selectMonth} = counterSlice.actions

export default counterSlice.reducer