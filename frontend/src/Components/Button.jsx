
export const Button=({value ,onclick})=>{
    return<div>
        <div className="bg-black rounded-md text-white w-30 m-6">
        <button onClick={onclick} className="font-semibold text-md w-full h-10 ">{value}</button>
        </div>
    </div>
}