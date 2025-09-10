import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk ("products/getProucts",async(_,thunkApi) => {
    try {
        const res = await fetch("http://localhost:5080/products");
        const data = await res.json();
        return data;
    }catch(error) {
         console.log(error);
    }
})



const productsSlice = createSlice({
    name : "products",
    initialState: {products : [],isLoading : false, error : "",isSideBarOpen : false},
    reducers: {
        toggleSideBar : (state,action) => {
            state.isSideBarOpen = !state.isSideBarOpen;
        }
    },
    extraReducers : (builder) => {
        builder
            .addCase(getProducts.fulfilled , (state,action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected , (state,action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getProducts.pending , (state,action) => {
                state.isLoading = true;

            })
    }
    }


)

export default productsSlice.reducer;
export const {toggleSideBar} = productsSlice.actions;