import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: "",
}

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.theme = action.payload
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer