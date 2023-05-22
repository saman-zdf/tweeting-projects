import { User } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface StateType {
  user: User;
}

const initialState = {
  user: {
    id: 0,
    email: "",
    username: "",
    role: "",
    createdAt: "",
    updatedAt: "",
  },
} as StateType;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
