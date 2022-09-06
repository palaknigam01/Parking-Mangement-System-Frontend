import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes= (props)=>{
    let Cmp = props.Cmp;
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token")
    console.log('-------protected',token)
    useEffect(()=>{
        if(!token){
            navigate("/log-in")
        }
    },[])
    return (
        <Cmp/>
    )
}

export default ProtectedRoutes;