import { userType } from "../types/userType";

type user = { userName: string };

export const Home = ({ userName }: user) => <h1>Hello {userName}</h1>;
