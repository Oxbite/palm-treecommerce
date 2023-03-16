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


type result =  {
  id: String
}

type propType = {
  message: String
}

function Home({message}:propType){
  
  return(<> <h1>{message}</h1></>)
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element= {<Home message="Hi" />} />
          <Route path="/hello" element= {<Home message="Hello" />} />
          </Route>
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
