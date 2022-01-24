import React from "react";
import Header from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Body from "../../components/Body/Body";

// components
import { Routes, Route } from "react-router-dom";

import { sidebar } from "../../mock/sidebar";

const Home = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Routes>
        {sidebar.map(({ component: Comp, path, id }) => (
          <Route key={id} path={path} element={<Comp />} />
        ))}
      </Routes>
    </div>
  );
};

export default Home;
