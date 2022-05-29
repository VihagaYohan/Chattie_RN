import {configureStore} from '@reduxjs/toolkit'
import themeReducer from './Reducers/theme'

export const store = configureStore({
    reducer:{
        theme:themeReducer
    }
})