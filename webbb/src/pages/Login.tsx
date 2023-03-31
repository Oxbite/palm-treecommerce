import { Box, Button } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const sleep = (ms: Number) => new Promise((r) => setTimeout(r, 500));

interface MyFormValues {
  email: string;
  password: string;
}

export const Login = () => {
  const initialValues: MyFormValues = { email: "", password: "" };
  const [hasSubmitted, setSubmitted] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          const data = await fetch("/login", {
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
          if (jdata.error) {
            actions.setErrors({ email: jdata.error });
          } else {
            navigate("/", { replace: false });
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
            {hasSubmitted ? (
              <Box>
                <Link to="/forgot-password">forgot password?</Link>{" "}
              </Box>
            ) : (
              <></>
            )}
            <Button type="submit" isLoading={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
