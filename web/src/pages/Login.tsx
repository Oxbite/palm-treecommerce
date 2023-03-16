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
          console.log({ values, actions });
          await sleep(500);
          if (values.email === "fake@fake.com") {
            actions.setErrors({ email: "fake email error" });
          } else if (values.password === "fake") {
            actions.setErrors({ password: "fake password error" });
          } else {
            navigate("/", { replace: true });
          }
          actions.setSubmitting(false);
          setSubmitted(true);
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
