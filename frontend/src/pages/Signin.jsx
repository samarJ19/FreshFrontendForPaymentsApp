import { useNavigate } from "react-router-dom"
import { HeaderBox } from "../Components/HeaderBox"
import { Subheading } from "../Components/Subheading"
import { InputBox } from "../Components/InputBox"
import { Button } from "../Components/Button"
import { Option } from "../Components/Option"
import { useCallback, useEffect, useState } from "react"
import axios from "axios"

export const Signin=()=>{
    
    const navigate=useNavigate()
    useEffect(()=>{
        navigate('/signin')
    },[])

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const token=localStorage.getItem("token")
    function Loggedin(){
        {
            if(token)navigate("/dashboard")
        }
    }
    Loggedin();
    const handleSignin=useCallback(async()=>{
        try{
            const response= await axios.post("https://paymentbackend.onrender.com/api/v1/user/signin",{
                username:email,
                password:password
            })
            localStorage.setItem("token",response.data.token)
            {if(response.data.token){navigate('/dashboard')}}
        }
        catch(error){
            if(error.response.status==411)return alert("Email already taken / Incorrect inputs")
        }
    },[email,password,navigate])

    return <div>
        <div className="min-h-screen bg-gray-700 flex justify-center ">
        <div className="bg-gray-100 rounded-md h-1/2 w-1/4 m-16 ">
        <div>
        <HeaderBox label={"Sign In"}/>
        </div>
        <div className="ml-2 text-lg p-2">
        <Subheading main={"Enter your credential to access your "} sub={"account"}/>
        </div>
        <div className="ml-2">
        <InputBox onChange={(e)=>{
            setEmail(e.target.value)
        }} heading={"Email"}/>
        </div >
        <div className="ml-2">
        <InputBox onChange={(e)=>{
            setPassword(e.target.value)
        }} heading={"Password"}/>
        </div>
        <div>
        <Button onclick={handleSignin} value={"Sign In"}/>
        </div>
        <div className="mb-4">
        <Option main={"Don't have an account?"} sub={"Sign Up"} to={"/signup"}/>
        </div>
        </div>
        </div>
        
    </div>
}