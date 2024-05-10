import { Link } from "react-router-dom"

export const Option=({main,sub,to})=>{
    return<div className="flex justify-center font-semibold text-md">
    <p >{main}</p>
    <Link to={to}>
    <p className="cursor-pointer underline">{sub}</p>
    </Link>
</div>
}