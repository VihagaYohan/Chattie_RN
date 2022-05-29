import { createSlice } from '@reduxjs/toolkit'
import { colors, utils } from '../../utils'

const { storeData, getData } = utils

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: {
            mode: 'light-mode',
            primaryColor: colors.primaryPurple,
            backgroundColor: colors.primaryWhite
        }
    },
    reducers: {
        changeTheme(state, data) {
            state.mode = data.payload
            let obj = JSON.stringify(data.payload)
            console.log('state changed', state.mode)
        }
    }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer;