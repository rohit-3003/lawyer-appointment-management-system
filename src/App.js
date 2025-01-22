import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LawyerDetail from "./components/LawyerDetail";
import LawyersPage from "./components/LawyersPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/firm/:id" element={<LawyersPage />} />
          <Route path="/lawyers/:id" element={<LawyerDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
