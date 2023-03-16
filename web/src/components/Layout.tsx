import { JSX_TYPES } from "@babel/types";
import React, { useEffect, useState } from "react";
import { render } from "react-dom";

async function getuser() {
    const id = await fetch('http://localhost:4000/login/?id=6');
    return id;
} 

type resultType =  {
    id: String
}

export default function Layout() {
    const [result, setResult] = useState<resultType>(); 
    // const [message, setMessage] = useState<>();
    useEffect(() => {
    const api = async () => {
        const data = await fetch("http://localhost:4000/login/?id=6", {
        method: "GET"
        });
        const jsonData = await data.json();
        console.log(jsonData)
        setResult(jsonData);
    };

    api();
    }, []);
    console.log("result " + result)

    if(result == undefined) {
        return(<>WTFFF 
            </>
            )
    }
    else {

        return(
            <>WTFFF 
            { result.id
           }
            </>
        );
    }
}