import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "@/shared/styles/reset.css";
import "@/shared/styles/index.css";

import { persistor, store } from "./redux/store";

import App from "./App";

const rootRef = document.getElementById("root");

if (!rootRef) {
  throw new Error("root element missing");
}

createRoot(rootRef).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
