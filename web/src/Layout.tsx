import { Heading, Grid, Box } from "@chakra-ui/layout";
import { ChakraProvider } from "@chakra-ui/provider";
import theme from "@chakra-ui/theme";
import React from "react";
import { Outlet, Routes } from "react-router";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import NavBar from "./components/navBar";

export default class Layout extends React.Component{
    render() {
        return (<ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <NavBar /> 
                <ColorModeSwitcher justifySelf="flex-end" />
                  <Outlet />
            </Box>
          </ChakraProvider>
          );
    }
}