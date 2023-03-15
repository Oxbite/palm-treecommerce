import { JSX_TYPES } from "@babel/types";
import React, { useEffect, useState } from "react";
import { render } from "react-dom";

async function getuser() {
    const id = await fetch('http://localhost:4000/login/?id=6');
    return id;
} 

type result =  {
    id: String
}

export default function Layout() {
    const [result, setResult] = useState<result[]>([]);
    console.log(result)

    useEffect(() => {
    const api = async () => {
        const data = await fetch("http://localhost:4000/login/?id=6", {
        method: "GET"
        });
        const jsonData = await data.json();
        setResult(jsonData.results);
    };

    api();
    }, []);
    return(
        <>Very cool  {
            result.map((value)=>{
                return(<>asdfasdf {value.id}</>)
            })
        }</>
    );
}