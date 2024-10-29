import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout/shared/Layout";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Dashboard from "./Layout/Dashboard";
import { Provider } from "react-redux";
import store from "./Features/Redux/Store/store";
import { I18nextProvider } from "react-i18next";
import i18n from "./Features/Languages/i18n";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> }, 
      { path: "creativedesign", element: <div>Creative Page</div> },
      { path: "/messages", element: <div>Message Page</div> },
      { path: "/notes", element: <div>Notes Page</div> },
      { path: "/folders", element: <div>Folders Page</div> },
      { path: "/settings", element: <div>Setting Page</div> },
      { path: "/profile", element: <div>Profile Page</div> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>
          <RouterProvider router={router} />
        </I18nextProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
