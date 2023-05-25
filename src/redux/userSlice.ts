import { User } from "@/utils/types";
import { localStorageGetItem } from "@/utils/windowStorages/Storages";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface StateType {
  user: User;
}

const initialState = {
  user: JSON.parse(localStorageGetItem("user")) || {
    id: 0,
    email: "",
    username: "",
    role: "",
    token: "",
  },
} as StateType;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = {
        id: 0,
        email: "",
        username: "",
        role: "",
        token: "",
      };
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
