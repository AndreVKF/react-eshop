import React, { createContext, useContext, useReducer } from "react";
import { initialState } from "./reducer";

// prepares the data layer
export const StateContext = createContext(initialState);

// wrap app into the data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// pull information from the data layer
export const useStateValue = () => useContext(StateContext);
