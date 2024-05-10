import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Users=({})=>{
    const [data,setData]=useState([])
    const [filter,setFilter]=useState("")
    useEffect(()=>{
        let id=setTimeout(()=>{
            axios.post("https://paymentbackend.onrender.com/api/v1/user/bulk?filter"+filter,{},{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        .then(r=>{
            setData(r.data.user)
        })
        },500)
        return ()=>{clearTimeout(id)}
    },[filter])
    // function spilter({x}){
    //     const word=x.split(' ');
    //     return <div className="rounded-full bg-gray-200 m-4 px-4 pb-1 w-10 h-10 content-center ">
    //         {(word[0])[0]}{(word[1])[0]}
    //     </div>
    // }
    return<div>
        <div className="font-semibold text-lg m-4 pt-2">
        Users
        </div>
        <div className="w-100 h-14"> {/*There is an error in this code the search bar is exceeding the background div it should be within the screen it is one of the problems which is coming up again and again custom size of DIV */}
        <input onChange={(e)=>{setFilter(e.target.value)}} className="ml-2 mt-1 w-full pb-1.5 border border-gray-300 rounded-md focus:ring-gray-400 focus:border-gray-400 " type="text" placeholder=" Search users..."></input>
        </div>
        <div>
        {data.map((x)=>{
            return <div className="flex justify-between">
            <div className="flex">
            <div className="rounded-full bg-gray-200 m-2 px-2.5 pt-1  w-8 h-8 ">
            {x.firstName[0].toUpperCase()}   
            </div>
            <div className="mr-2 mt-3">{x.firstName}
            </div>
            </div>
            <div>
            <div className="bg-black rounded-md text-white w-40 m-6">
            <Link to={"/send?id="+x._id+"&name="+x.firstName}><button className="font-semibold text-md w-full h-10 ">Send</button></Link>    
            </div>
            </div>
            </div>
        })}
        </div>
    </div>
}