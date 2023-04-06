import Header from "@/Components/head";
import Container from "@/Components/main";
import { categoryType, meType, productType } from "@/types/metype";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

type productFormType = {
  name: string;
  price: number;
  discount: number;
  categoryId: string;
  featured: boolean;
};

const ProductAdd = () => {
  const [categories, setCategory] = useState<categoryType[]>([]);
  useEffect(() => {
    const api = async () => {
      const data = await fetch("http://localhost:4000/categories", {
        method: "GET",
        credentials: "include",
      });
      const jsonData = await data.json();
      console.log(jsonData);
      if (jsonData.error) {
      } else {
        setCategory(jsonData.categories);
      }
    };
    api();
  }, []);

  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [values, setValues] = useState<productFormType>({
    name: "",
    price: 0,
    discount: 0,
    categoryId: categories[0] ? categories[0].id : "",
    featured: false,
  });
  const router = useRouter();
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="name"
          value={values.name}
          onChange={(event) => {
            setValues({
              ...values,
              name: event.target.value,
            });
          }}
        />
        <input
          type="number"
          placeholder="price"
          value={values.price}
          onChange={(event) => {
            setValues({
              ...values,
              price: parseInt(event.target.value),
            });
          }}
        />
        <select>
          {categories.map((c) => {
            return <option value={c.id}>{c.name}</option>;
          })}
        </select>
        <button
          disabled={isSubmitting}
          onClick={(event) => {
            setSubmitting(true);
            const api = async () => {
              const data = await fetch("http://localhost:4000/login", {
                method: "POST",
                credentials: "include",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              });
              const jdata = await data.json();
              console.log(jdata);
              if ((jdata.status = "success")) {
                router.push("/");
              }
              setSubmitting(false);
            };
            api();
          }}
        >
          {isSubmitting ? <div className="loader"></div> : "Submit"}
        </button>
      </div>
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
        <ProductAdd />
      </Container>
    </>
  );
}
