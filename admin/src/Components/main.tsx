import { meType } from "@/types/metype";
import { Main } from "next/document";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

type mainType = {
  element: JSX.Element;
};

export default function Container({ element }: mainType) {
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
      <div>
        <nav>
          <Link href={"/product"}>Products</Link>
          <Link href={"/category"}>Categories</Link>
        </nav>
        <main>{element}</main>
      </div>
    </>
  );
}
