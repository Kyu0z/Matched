import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./state";
import * as reducers from "./reducers";

export default createSlice({
  name: "user",
  initialState,
  reducers,
});
