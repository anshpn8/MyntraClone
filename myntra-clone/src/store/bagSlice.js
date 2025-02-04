import {createSlice} from '@reduxjs/toolkit';

const bagSlice = createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
        addToBag:  (state,action) => {
             state.push(action.payload);
             console.log(state)
            },
            removeFromBag: (state,action) => {
                //item id or whole item
                console.log(state)
                 return state.filter((item) => item != action.payload);
                console.log(state)
            },
    },
});
export const bagActions=bagSlice.actions;

export default bagSlice;

