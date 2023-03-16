import { Flex } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const NavBar = () => {
  // const [Me, updateMe] = useState<meType>();
  // useEffect(()=> {

  //     updateMe(await ().json())

  // },[]);
  // var me = true
  // const logged_in = me ? "login" : "notlogin";
  return (
    <Flex backgroundColor="#B2F5EA">
      <Link to="">Login</Link>
      <Link style={{ marginRight: "3px" }} to="/">
        Home
      </Link>
      <Link to="/Hello">Hello</Link>
    </Flex>
  );
};

export default NavBar;
