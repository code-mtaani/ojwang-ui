import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sidebarShow: true,
}


export const SideBarToggleSlice = createSlice( {
    name: 'sidebar',
    initialState,
    reducers: {
        toggleTrue: ( state ) => {
            state.sidebarShow = true
        },
        toggleFalse: (state) => {
            state.sidebarShow =  false
        }
    }
} )

export const { toggleFalse, toggleTrue } = SideBarToggleSlice.actions
export default SideBarToggleSlice.reducer