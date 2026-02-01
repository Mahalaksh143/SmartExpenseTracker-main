import React from "react";
import { BrowserRouter, Routes, Route, useLocation, Outlet } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Income from "./Pages/Income";
import Expense from "./Pages/Expense";
import Cards from "./Components/Cards";

/* 🔹 Layout component */
const Layout = () => {
  const location = useLocation();

  // Hide sidebar only on Home page
  const hideSidebar = location.pathname === "/";

  return (
    <div className="bg-blue-200 min-h-screen">
      {/* Sidebar show only if not Home */}
      {!hideSidebar && <Sidebar />}

      <div className={`${!hideSidebar ? "p-4 sm:ml-40" : ""}`}>
        <div
          className={`${
            !hideSidebar
              ? "p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14"
              : ""
          }`}
        >
          {/* Cards only on Dashboard */}
          {!hideSidebar && location.pathname === "/dashboard" && <Cards />}

          {/* This is where pages will render */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

/* 🔹 App root */
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
