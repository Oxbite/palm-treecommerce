import Header from "@/Components/head";
import Container from "@/Components/main";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header title={"Home"} />
      <Container element={<h1>Admin Space</h1>} />
    </>
  );
}
