import Header from "@/Components/head";
import Login from "@/Components/login";
import Container from "@/Components/main";
import { meType, productType } from "@/types/metype";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const productList = () => {
  const [products, setProducts] = useState<productType[]>();
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    const api = async () => {
      const data = await fetch("http://localhost:4000/me", {
        method: "GET",
        credentials: "include",
      });
      const jsonData = await data.json();
      console.log(jsonData);
      if (jsonData.error) {
      } else {
        setProducts(jsonData);
      }
    };
    api();
  });
};

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
        <h1> Admin Space {user.email} </h1>
      </Container>
    </>
  );
}
