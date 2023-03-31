import { Box, Button } from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { useState } from "react";
import { Form, Link } from "react-router-dom";

interface MyFormValues {
  name: string;
  price: string;
  discount: string;
  category: string;
}

export const AddProduct = () => {
  const initialValues = {
    name: "",
    price: "",
    discount: "",
    category: "",
  };

  return (
    <>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          const data = await fetch("/addProduct", {
            method: "POST",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
          const jdata = await data.json();
          if (jdata.status == "success") {
          } else {
            actions.setErrors({ category: jdata.error });
          }
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
                style={errors.category ? { border: "2px solid red" } : {}}
              />
              {errors.category}
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
    </>
  );
};
