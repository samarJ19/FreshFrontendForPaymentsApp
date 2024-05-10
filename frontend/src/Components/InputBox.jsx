
export const InputBox=({heading,onChange})=>{
    return <div>
        <div className="ml-3 font-semibold">
            {heading}
        </div>
        <div className=" w-80 flex justify-center">
            <input onChange={onChange} className="ml-2 mt-1 w-full pb-1.5 mr-2 border border-gray-300 rounded-md focus:ring-gray-400 focus:border-gray-400 " type="text" placeholder=""></input>
        </div>
    </div>
}