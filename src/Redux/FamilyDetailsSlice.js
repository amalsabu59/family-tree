import { createSlice } from "@reduxjs/toolkit";

const toggleAccordian = createSlice({
  name: "AccordianUi",
  initialState: {
    data: [
      {
        id: 1,
        name: "Grand Father",
        age: 75,
        location: "New York",
        permanentAddress: "123 Main St, New York, NY 10001",
        children: [
          {
            id: 2,
            name: "John",
            age: 50,
            location: "Los Angeles",
            permanentAddress: "456 Sunset Blvd, Los Angeles, CA 90028",
            children: [
              {
                id: 3,
                name: "David",
                age: 25,
                location: "San Francisco",
                permanentAddress: "789 Market St, San Francisco, CA 94102",
                children: [
                  {
                    id: 4,
                    name: "Emil",
                    age: 5,
                    location: "San Francisco",
                    permanentAddress: "789 Market St, San Francisco, CA 94102",
                  },
                ],
              },
            ],
          },
          {
            id: 5,
            name: "Grand Daughter 2",
            age: 45,
            location: "Boston",
            permanentAddress: "111 Beacon St, Boston, MA 02108",
            children: [
              {
                id: 6,
                name: "Daughter 2",
                age: 30,
                location: "Chicago",
                permanentAddress: "333 W Lake St, Chicago, IL 60601",
                children: [
                  {
                    id: 7,
                    name: "Son 2",
                    age: 2,
                    location: "Chicago",
                    permanentAddress: "333 W Lake St, Chicago, IL 60601",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    open: { 1: true, 5: true },
    selectedMemberData: [],
  },
  reducers: {
    toggleAccordianWidthId(state, action) {
      state.open = action.payload;
    },
    selectedMemberdata(state, action) {
      state.selectedMemberData = action.payload;
    },
    importJson(state, action) {
      state.data = action.payload;
    },
  },
});

export const ToggleAccordian = toggleAccordian.actions;
export default toggleAccordian;
