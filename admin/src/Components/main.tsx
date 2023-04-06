import { meType } from "@/types/metype";
import { Main } from "next/document";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, Children } from "react";

type mainType = {
  children: React.ReactNode;
};

export default function Container({ children }: mainType) {
  return (
    <>
      <div>
        <nav>
          <Link href={"/product"}>Products</Link>
          <Link href={"/category"}>Categories</Link>
        </nav>
        <main>{children}</main>
      </div>
    </>
  );
}
