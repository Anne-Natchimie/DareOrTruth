import { createSlice } from "@reduxjs/toolkit";

const initState = [ {id:1, name:'Easy'},
                    {id:1, name:'Average'},
                    {id:1, name:'Difficult'}]

export const category = createSlice({
    name: "category", 
    initialState: initState, 
    reducers: {
        add:(state) => {
        }
    }
})

export default category.reducer