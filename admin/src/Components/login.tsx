import { useRouter } from "next/router";
import { useState } from "react";

type loginValue = {
  email: string;
  password: string;
};

type loginProps = {
  redirect?: string;
};

export default function Login({ redirect = "/" }: loginProps) {
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [values, setValues] = useState<loginValue>({ email: "", password: "" });
  const router = useRouter();
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="email"
          value={values.email}
          onChange={(event) => {
            setValues({
              email: event.target.value,
              password: values.password,
            });
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={values.password}
          onChange={(event) => {
            setValues({ email: values.email, password: event.target.value });
          }}
        />
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
                router.push(redirect);
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
}
