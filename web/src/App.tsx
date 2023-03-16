// This is a React Router v6 app
import { JSX_TYPES } from "@babel/types";
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Layout from "./Layout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element= {<Home userName="Hi" />} />
          <Route path="login" element= {<Login />} />
          </Route>
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
