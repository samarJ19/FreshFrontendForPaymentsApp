import { useNavigate } from "react-router-dom"
import { Users } from "../Components/Users"
import { useCallback, useEffect, useState } from "react"
import axios from "axios"

export const Dashboard=()=>{
    const navigate=useNavigate()
    const [userData,setUserData]=useState({name:" ",balance:0})
    useEffect(() => {
        navigate('/dashboard'); // Navigate on component mount
    }, [navigate]);
    const fetchData=useCallback(async ()=>{
        try{
            const responseName=await axios.post("https://paymentbackend.onrender.com/api/v1/user/me",{
                "token":localStorage.getItem("token")
            })
            const responseBalance=await axios.post("https://paymentbackend.onrender.com/api/v1/account/me",{
                "token":localStorage.getItem("token")
            })
            setUserData({name:responseName.data.firstName,balance:responseBalance.data.balance})
        }
        catch(error){
            console.error("Error while fetching data",error)
        }
    },[])
    useEffect(()=>{
        fetchData();
        
    },[fetchData])
    return <div className="min-h-screen bg-gray-100">
        <div className="border-b-2 border-gray-200 flex justify-between">   {/*Top bar */}
        <div className="font-semibold text-xl m-4">
        Payments App 
        </div>
        <div className="flex">
        <div className="m-4 pt-2 text-md font-semibold">
         Hello, {userData.name}
        </div>
        <div className="rounded-full bg-gray-200 m-4 px-4 pb-1 w-10 h-10 content-center ">
        {userData.name[0].toUpperCase()}
        </div>
        <div className="bg-gray-200 rounded-sm text-gray-700 w-20 m-4">
        <button onClick={()=>{
            localStorage.removeItem("token")
            navigate('/signin')
        }} className="font-semibold text-md w-full h-10 ">Logout</button>
        </div>
        </div>
        </div>
        <div className="text-lg font-semibold m-4">
            Your Balance $ {userData.balance}
        </div>
        <Users></Users>
    </div> 
}