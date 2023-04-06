import Crud from "@/Components/crudTable";
import Header from "@/Components/head";
import Container from "@/Components/main";
import { meType, productType } from "@/types/metype";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState<productType[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  let maxSize = 0;
  useEffect(() => {
    setLoading(true);
    const api = async () => {
      const data = await fetch(
        "http://localhost:4000/products?page=" + page + "&limit=20",
        {
          method: "GET",
          credentials: "include",
        }
      );
      const jsonData = await data.json();
      console.log(jsonData);
      if (jsonData.error) {
      } else {
        maxSize = jsonData.maxSize;
        setProducts(jsonData.products);
      }
      setLoading(false);
    };
    api();
  }, []);

  return (
    <>
      {isLoading ? <div className="loader"></div> : <></>}
      <Crud data={products} heads={["name"]} />
      <button
        disabled={page > maxSize / 20}
        onClick={() => {
          if (page < maxSize / 20) setPage(page + 1);
        }}
      >
        Next
      </button>
      <button
        disabled={page == 1}
        onClick={() => {
          if (page > 1) setPage(page - 1);
        }}
      >
        Prev
      </button>
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
