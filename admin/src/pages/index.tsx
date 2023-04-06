import Header from "@/Components/head";
import Container from "@/Components/main";
import { meType } from "@/types/metype";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<meType>(null);
  useEffect(() => {
    const api = async () => {
      const data = await fetch("http://localhost:4000/me", {
        method: "GET",
        credentials: "include",
      });
      const jsonData = await data.json();
      console.log(jsonData);
      if (jsonData.error) {
        router.push("/login");
      } else {
        setUser(jsonData);
      }
    };
    api();
  }, []);
  if (!user) {
    return <></>;
  }
  return (
    <>
      <Header title={"Home"} />
      <Container>
        <h1>Admin Space {user.email}</h1>
      </Container>
    </>
  );
}
