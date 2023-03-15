import { Link, List, ListItem } from "@chakra-ui/layout";
import React from "react";

export default class NavBar extends React.Component {
    render () {return (
        <nav> 
            
        <List>
            <ListItem><Link href="/">Home</Link></ListItem>
        </List>
        </nav>
    )};
};