import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  warehouses: [], 
  loading: false,
  error: null,
};

const warehouseSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {
    setWarehouses: (state, action) => {
      state.warehouses = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateWarehouse: (state, action) => {
      const index = state.warehouses.findIndex(
        (w) => w.id === action.payload.id
      );
      if (index !== -1) {
        state.warehouses[index] = action.payload;
      }
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setWarehouses, updateWarehouse, setLoading, setError } =
  warehouseSlice.actions;

export const fetchWarehouses = () => async (dispatch) => {
  try {
    dispatch(setLoading());

    const response = await fetch("/warehouseData.json"); 

    console.log("Response:", response);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Data:", data); 

    dispatch(setWarehouses(data));
  } catch (error) {
    console.error("Error fetching warehouses:", error);
    dispatch(setError(error.message));
  }
};



export default warehouseSlice.reducer;
