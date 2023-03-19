import { Box, Button } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const sleep = (ms: Number) => new Promise((r) => setTimeout(r, 500));

interface MyFormValues {
  Fname: string;
  Lname: string;
  email: string;
  password: string;
  role: string;
}

export const Register = () => {
  const initialValues: MyFormValues = {
    email: "",
    password: "",
    Lname: "",
    Fname: "",
    role: "Admin",
  };
  const [hasSubmitted, setSubmitted] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          const data = await fetch("http://localhost:4000/register", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
          const jdata = await data.json();
          if (jdata.error) {
            actions.setErrors({ email: jdata.error });
          } else {
            navigate("/", { replace: true });
          }
          setSubmitted(true);
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <Box>
              <label htmlFor="email">email</label>
              <Field
                id="email"
                name="email"
                placeholder="eg. email@email.com"
                style={errors.email ? { border: "2px solid red" } : {}}
              />
              {errors.email}
            </Box>

            <Box>
              <label htmlFor="email">First Name</label>
              <Field
                id="Fname"
                name="Fname"
                placeholder="eg. email@email.com"
                style={errors.Fname ? { border: "2px solid red" } : {}}
              />
              {errors.email}
            </Box>
            <Box>
              <label htmlFor="Lname">Last Name</label>
              <Field
                id="Lname"
                name="Lname"
                placeholder="eg. email@email.com"
                style={errors.Lname ? { border: "2px solid red" } : {}}
              />
              {errors.email}
            </Box>

            <Box>
              <label htmlFor="email">password</label>
              <Field
                style={errors.password ? { border: "2px solid red" } : {}}
                type="password"
                id="password"
                name="password"
                placeholder="password"
              />
              {errors.password}
            </Box>

            <Button type="submit" isLoading={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
