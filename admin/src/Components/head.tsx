import { meType } from "@/types/metype";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

type headerType = {
  title: string;
  description?: string;
};

export default function Header({
  title,
  description = "Admin PalmTree",
}: headerType) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
