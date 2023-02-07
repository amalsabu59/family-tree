import { configureStore } from "@reduxjs/toolkit";

import toggleAccordian from "./FamilyDetailsSlice";
import familyDetailsSlice from "./FamilyDetailsSlice";

const store = configureStore({
  reducer: {
    AccordianUi: toggleAccordian.reducer,
  },
});
export default store;
