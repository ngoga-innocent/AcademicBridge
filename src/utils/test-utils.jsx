// src/utils/test-utils.js

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/Redux/Slice/UserSlice"; // Import individual slices

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({ 
      reducer: { 
        user: userReducer 
      },
      preloadedState
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}
