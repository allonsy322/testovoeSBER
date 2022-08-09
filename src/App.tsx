import React from "react";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import ThemeProvider from "./components/ThemeProvider";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";


const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
