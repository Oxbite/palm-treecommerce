import Header from "@/Components/head";
import Login from "@/Components/login";
import Container from "@/Components/main";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  return (
    <>
      <Link href={"/productList"}>
        {" "}
        <h1>List</h1>{" "}
      </Link>
      <Link href={"/productAdd"}>
        {" "}
        <h1>Add</h1>{" "}
      </Link>
    </>
  );
};

export default function Home() {
  return (
    <>
      <Header title={"Home"} />
      <Container element={<ProductsPage />} />
    </>
  );
}
