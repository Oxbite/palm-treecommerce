import Crud from "@/Components/crudTable";
import Header from "@/Components/head";
import Container from "@/Components/main";
import { categoryType, meType, productType } from "@/types/metype";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const CategoryAdd = () => {
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [values, setValues] = useState<categoryType>({
    name: "",
    id: "",
  });
  const router = useRouter();
  return (
    <>
      <h1>Add Category</h1>
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

        <button
          disabled={isSubmitting}
          onClick={(event) => {
            setSubmitting(true);
            const api = async () => {
              const data = await fetch("http://localhost:4000/addCategory", {
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
              if (jdata.status == "success") {
                router.reload();
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

const CategoryList = () => {
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

  return (
    <>
      <h1>Category list</h1>
      <Crud data={categories} heads={["name"]} />
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
        <CategoryAdd />
        <CategoryList />
      </Container>
    </>
  );
}
