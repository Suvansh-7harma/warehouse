import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import WarehouseListPage from "./pages/WarehouseListPage"; 
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage"; 
import "../src/App.css";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<WarehouseListPage />} />
            <Route path="/warehouse/:id" element={<WarehouseDetailsPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
