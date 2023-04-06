import Crud from "@/Components/crudTable";
import Header from "@/Components/head";
import Container from "@/Components/main";
import { meType, productType } from "@/types/metype";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState<productType[]>([]);
  const [page, setPage] = useState<number>(1);
  let maxSize = 0;
  useEffect(() => {
    const api = async () => {
      const data = await fetch(
        "http://localhost:4000/products?page=" + page + "&limit=20",
        {
          method: "GET",
          credentials: "include",
        }
      );
      const jsonData = await data.json();
      console.log(jsonData.products);
      if (jsonData.error) {
      } else {
        maxSize = jsonData.maxSize;
        setProducts(jsonData.products);
      }
    };
    api();
  }, []);

  return (
    <>
      <Crud data={products} heads={["name"]} />
      <button>Next</button>
      <button>Prev</button>
    </>
  );
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
        <ProductList />
      </Container>
    </>
  );
}
