import { userType } from "../types/userType";

export const Home = (users: userType) => (
  <h1>Hello {users?.userName || "Anon"}</h1>
);
