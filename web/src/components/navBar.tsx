import { Flex, List, ListItem } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import linkStyle from "../styles/linkStyle";


type navProp = {
    active: boolean
}
type userType = {
    id: String,
    username: String
}
type meType = {
    error?:String,
    user?: userType
}
    
    
    
const NavBar  = ()=> {
    // const [Me, updateMe] = useState<meType>();
    // useEffect(()=> {


    //     updateMe(await ().json())


    // },[]);
    // var me = true
    // const logged_in = me ? "login" : "notlogin";
    return (
        <Flex backgroundColor="#B2F5EA">
        
        <Link to="">Login</Link>
        <Link style={{marginRight: "3px"}} to="/">Home</Link>
        <Link  to="/Hello">Hello</Link>
        </Flex>
)};

export default NavBar;
