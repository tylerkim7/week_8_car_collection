import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: 'Apollo',
        model: "Intenza Emozione",
        price: '2.6 million',
        year: '2018',
        acceleration: '2.7 sec',
        max_speed: '208 mph',
        weight: '2755 lb',
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        chooseAcceleration: (state, action) => { state.acceleration = action.payload},
        chooseSpeed: (state, action) => { state.max_speed = action.payload},
        chooseWeight: (state, action) => { state.weight = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, choosePrice, chooseYear, chooseAcceleration, chooseSpeed, chooseWeight } = rootSlice.actions;