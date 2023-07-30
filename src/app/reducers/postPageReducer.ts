import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: PostPageState = {
  isFetching: true,
  error: null,
  content: {
    list: [],
    totalElements: 0,
  },
};

export const postPageSlice = createSlice({
  name: "postPage",
  initialState,
  reducers: {
    reset: () => initialState,
    fetchError(state, action: PayloadAction<string | null>) {
      state.isFetching = false;
      state.error = action.payload;
      state.content = {
        list: [],
        totalElements: 0,
      };
    },
    fetchSuccess(state, action: PayloadAction<Page<PostContent>>) {
      state.isFetching = false;
      state.error = null;
      state.content = action.payload;
    },
  },
});

export const postPageActions = postPageSlice.actions;
export const postPageReducer = postPageSlice.reducer;
