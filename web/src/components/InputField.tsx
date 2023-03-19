import { Box } from "@chakra-ui/react";
import { Field } from "formik";
import { useState } from "react";

type fieldValues = {
  placeholder?: string;
  error?: string;
  name: string;
  type: string;
  blur?: () => void;
};

export const InputField = ({
  error,
  name,
  type,
  placeholder = "",
  blur = () => {
    return;
  },
}: fieldValues) => {
  const [valError, setValError] = useState(false);

  return (
    <Box>
      <label htmlFor="email">email</label>
      <Field
        onfocusout={blur}
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        style={error || valError ? { border: "2px solid red" } : {}}
      />
      <br />
      {error}
    </Box>
  );
};
