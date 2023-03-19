import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { userType } from "./types/userType";

export default function App() {
  const userh1 = (user: userType) => {
    return <h1>User is {user?.userName || "Anon"}</h1>;
  };
  const [user, setUser] = useState<userType>(null);
  useEffect(() => {
    const api = async () => {
      const data = await fetch("http://localhost:4000/me", {
        method: "GET",
      });
      const jsonData = await data.json();
      console.log(jsonData);
      setUser(jsonData);
    };
    if (!user) {
      api();
    }
  }, [user]);
  return (
    <>
      {userh1(user)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home userName="hello" />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          {/* <Route path="users/*" element={<Users />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
