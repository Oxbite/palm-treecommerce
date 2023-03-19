import { Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { SERVER_LINK } from "../const";

const LogoutButton = () => {
  const [isSubmitting, setSubmitting] = useState(false);

  const submit = () => {
    setSubmitting(true);
    const api = async () => {
      const jdata = await (
        await fetch(SERVER_LINK + "logout", {
          method: "GET",
        })
      ).json();
      if (jdata.success) {
        redirect("/");
      }
      setSubmitting(false);
    };
    api();
  };
  return (
    <Button onClick={() => submit()} isLoading={isSubmitting}>
      Logout
    </Button>
  );
};

const NavBar = () => {
  // const [Me, updateMe] = useState<meType>();
  // useEffect(()=> {

  //     updateMe(await ().json())

  // },[]);
  // var me = true
  // const logged_in = me ? "login" : "notlogin";
  return (
    <Flex backgroundColor="#B2F5EA">
      <Link to="/login">Login</Link>
      <Link style={{ marginRight: "3px" }} to="/">
        Home
      </Link>
      <LogoutButton />
    </Flex>
  );
};

export default NavBar;
