import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";
const initialState = {
    status: statusFilters.all,

}


const filteredSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setStatusFilter(state, action) {
            state.status = action.payload
        }
    }
})


export const { setStatusFilter } = filteredSlice.actions
export default filteredSlice.reducer