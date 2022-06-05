import { createSlice } from '@reduxjs/toolkit'
import { colors, utils, mode } from '../../utils'

const { storeData, getData } = utils

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: {
            mode: 'light-mode',
            primaryColor: 'red',
            backgroundColor: 'white'
        },
        message:'initial '
    },
    reducers: {
        changeTheme(state, data) {
            let obj = data.payload
            console.log(obj)
            state.theme = obj;
           /*  state.theme.mode = obj.mode
            state.theme.primaryColor = obj.primaryColor
            state.theme.backgroundColor = obj.backgroundColor */
        }
    }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer;