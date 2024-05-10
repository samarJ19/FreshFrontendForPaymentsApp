import { useNavigate, useSearchParams } from "react-router-dom"
import { HeaderBox } from "../Components/HeaderBox"
import axios from "axios"
import { useState } from "react"

export const Send=()=>{
    const navigate=useNavigate()
    const [searchParms]=useSearchParams()
    const id=searchParms.get("id")
    const name=searchParms.get("name")
    console.log(name)
    const [amount,setAmount]=useState(0)
    return <div className="min-h-screen bg-gray-200 flex justify-center ">
        <div className="bg-white h-1/2 w-1/4 m-16">
        <HeaderBox label={"Send Money"}/>
        <div className="flex justify-start">
        <div className="rounded-full bg-green-150 m-2 px-5 pt-2  w-12 h-12 text-xl text-white font-semibold ">
        {name[0].toUpperCase()}   
        </div>
        <div className="font-semibold text-xl mt-4 ml-2">
        {name}
        </div>
        </div>
        <div>
        <div className="ml-5 font-semibold text-md">
        Amount (in Rs)
        </div>
        <div className=" w-80 flex justify-center">
        <input onChange={(e)=>{
            setAmount(e.target.value)
        }} className="ml-6 mt-1 w-full px-1.5 pb-1.5 mr-2 border border-gray-300 rounded-md focus:ring-gray-400 focus:border-gray-400 " type="text" placeholder="Enter Amount"></input>
        </div>
        </div>
        <div>
        <div className="bg-green-150 rounded-md text-white w-30 m-6">
        <button onClick={async ()=>{
          const response= await axios.post("https://paymentbackend.onrender.com/api/v1/account/transfer",{
                to:id,
                amount:amount
            },{
                headers:{
                    Authorization:"Bearer "+localStorage.getItem("token")
                }
            })
            {if(response.data.message=="Insufficient balance"){
                navigate('/dashboard')
                alert("Insufficient balance")}
            else if(response.data.message=="Transfer successful"){
                alert("Transfer Successful")
                navigate('/dashboard')}
        }
        }} className="font-semibold text-md w-full h-10 ">Initiate Transfer</button>
        </div>
        </div>
        </div>
    </div>
}