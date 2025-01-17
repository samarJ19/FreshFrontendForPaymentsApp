import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
export const Homepage=()=>{

    const navigate=useNavigate();
    navigate("/")
{/*<div className="bg-gray-200 shadow rounded-md text-black w-20 m-6">
        <button onClick={onclick} className="font-semibold text-md w-full h-10 ">{"SignIn"}</button> 
</div>*/}
function Loggedin(){
    {
        
        if(localStorage.getItem("token"))navigate("/dashboard")
    }
}
useEffect(()=>{
    Loggedin();
},[])
   return <div className="min-h-screen bg-gray-200 flex flex-col ">
    <div className="flex-grow">
   <div className="flex justify-between shadow">{/*topbar */}
   <div className="m-4 sm:px-8 md:px-16">
   <svg viewBox="0 0 2500.0000000000005 783.57" xmlns="http://www.w3.org/2000/svg" width="60" height="40">
   <path d="M2491.56 231.12c-22.69-64.88-84.54-111.47-157.17-111.47h-1.52c-47.22 0-89.78 19.65-120.07 51.2-30.34-31.55-72.9-51.2-120.07-51.2h-1.52c-41.51 0-79.45 15.2-108.59 40.35v-12.79c-1-12.74-11.48-22.75-24.42-22.75h-111.42c-13.63 0-24.63 11.01-24.63 24.68V754.2c0 13.68 11.01 24.68 24.63 24.68h111.42c12.42 0 22.64-9.28 24.27-21.28l-.05-434.36c0-1.52.05-2.93.21-4.35 1.78-19.39 15.98-35.32 38.42-37.32h20.54c9.38.84 17.3 4.14 23.53 9.12 9.7 7.7 15.09 19.55 15.09 32.55l.42 432.22c0 13.68 11.06 24.74 24.63 24.74h111.42c13.15 0 23.85-10.48 24.48-23.53l-.05-434c-.05-14.26 6.55-27.15 18.13-34.8 5.71-3.67 12.58-6.13 20.49-6.87h20.54c24.11 2.1 38.68 20.39 38.63 41.67l.42 431.64c0 13.68 11.06 24.68 24.63 24.68h111.42c13.57 0 24.63-11.01 24.63-24.68V290.08c0-31.66-3.56-45.13-8.44-58.96zm-754.3-105.08h-63.73V22.48c0-12.42-10.06-22.48-22.48-22.48-1.47 0-2.88.21-4.25.47-70.65 19.39-56.5 117.24-185.47 125.57h-12.53c-1.89 0-3.67.26-5.4.63h-.1l.1.05c-11.01 2.46-19.29 12.21-19.29 23.95V262.1c0 13.57 11.06 24.63 24.68 24.63h67.24l-.1 472.47c0 13.47 10.9 24.37 24.37 24.37h110.16c13.42 0 24.32-10.9 24.32-24.37l.05-472.47h62.42c13.57 0 24.63-11.06 24.63-24.63V150.68c.02-13.58-11.04-24.64-24.62-24.64z" fill="#54c1f0"/>
   <path d="M1336.38 126.04h-111.42c-13.57 0-24.58 11.06-24.58 24.63v230.39c-.26 14.26-11.79 25.68-26.1 25.68h-46.64c-14.46 0-26.15-11.63-26.15-26.1l-.42-229.97c0-13.57-11.06-24.63-24.63-24.63H965.01c-13.63 0-24.63 11.06-24.63 24.63v252.51c0 95.91 68.39 164.3 164.35 164.3 0 0 72.01 0 74.21.42 13 1.47 23.11 12.37 23.11 25.79 0 13.26-9.91 24.11-22.75 25.73-.63.1-1.21.26-1.89.37l-162.94.58c-13.63 0-24.63 11.06-24.63 24.63v111.37c0 13.63 11.01 24.63 24.63 24.63h182.17c96.01 0 164.35-68.34 164.35-164.3V150.68c.02-13.58-10.98-24.64-24.61-24.64zm-1068.68-.02H24.16C10.8 126.02 0 136.86 0 150.18v109.17c0 .21.05.42.05.63 0 .52-.05 1.05-.05 1.52v494.1c0 13.42 10.06 24.37 22.54 24.68h113.52c13.57 0 24.63-11.01 24.63-24.63l.42-169.33h106.6c89.2 0 151.36-61.89 151.36-151.46V277.69c-.01-89.57-62.17-151.67-151.37-151.67zm-9.8 272.94c0 14.41-11.69 26.15-26.1 26.15l-70.7.05V287.38h70.7c14.41 0 26.1 11.63 26.1 26.1zm444.59-272.31h-154.6c-13.68 0-24.74 10.38-24.74 23.11v43.34c0 .26.05.58.05.84 0 .31-.05.63-.05.94v59.38c0 13.47 11.74 24.47 26.2 24.47h147.22c11.63 1.83 20.86 10.32 22.17 23.58v14.36c-1.31 12.63-10.43 21.85-21.54 22.9h-72.9c-96.96 0-166.03 64.41-166.03 154.87v129.55c0 89.93 59.38 153.92 155.65 153.92h202.04c36.27 0 65.67-27.46 65.67-61.27V293.89c0-102.51-52.83-167.24-179.14-167.24zm17.72 482.53c0 1.42-.21 2.78-.42 4.09a26.12 26.12 0 0 1-1.05 3.62c-3.46 9.75-13.21 16.82-24.79 16.82h-46.38c-14.46 0-26.26-11.01-26.26-24.53v-21.02c0-.26-.05-.52-.05-.79l.05-55.92v-17.5l.05-.16c.05-13.47 11.74-24.37 26.2-24.37h46.38c14.52 0 26.26 10.95 26.26 24.53v95.23z" fill="#233266"/></svg>
   </div>
   <div className="flex m-4">
   <div className="bg-gray-200  rounded-full text-black hover:bg-sky-500 w-20 mr-6 ">
   <button onClick={()=>{navigate("/signin")}} className="font-semibold text-md pl-4 pt-1.5 h-5 ">{"Sign In"}</button> 
   </div>
   <div className="bg-gray-200  rounded-full text-black hover:bg-sky-500 w-20 mr-6">
   <button onClick={()=>{navigate("/signup")}} className="font-semibold text-md pl-3 pt-1.5 h-5 ">{"Sign Up"}</button> 
   </div>
   </div>
   </div>
   <div className="flex justify-between sm:px-4 md:px-16 lg:px-2 ">   {/*images-*/}
   <div className="mx-16 sm:mx-6 sm:px-2 md:px-16 lg:px-2">
   <img src="https://assetscdn1.paytm.com/images/catalog/view/310944/1697527183231.png" alt="Logo" 
   className="w-25 h-20 sm:w-16 sm:h-16 sm:m-6 lg:m-12 shadow rounded-md" />
   <h1 class="lg:text-[54px] sm:text-[34px] lg:font-[700] sm:font-[500] lg:leading-[65px] sm:leading-[45px] font-sans sm:px-6 md:px-16 lg:px-2">India's Most-loved Payments App </h1>
   <div className="lg:w-65 lg:text-lg sm:text-[15px] font-semibold sm:px-6 md:px-16 lg:px-2">
   Introducing BalanceApp - the innovative platform that adds excitement to your finances! Upon signing up, each user is assigned a random balance, simulating the thrill of an unexpected windfall. With BalanceApp, you can seamlessly transfer funds to friends and family, or receive money from others. Experience the joy of managing your digital fortune and engaging in virtual transactions with this unique and entertaining app.
   </div>
   </div>
   <img src="https://assetscdn1.paytm.com/images/catalog/view_item/850762/1706796536129.png" alt="Banner" 
   className="lg:w-70 lg:h-80 lg:m-14 sm:w-50 sm:h-40 sm:mt-16 m-4 " />
   </div>
   </div>
   <div className="shadow bg-yellow-300 text-lg font-semibold flex justify-center py-3">
   ----Made by{" "},<a className="text-blue-700" href="https://www.linkedin.com/in/samarj1902/">Samar Joshi</a>,{" "}homepage inspired by <a className="text-blue-700" href="https://paytm.com/">,{" "}Paytm</a>
   </div>
</div>
}

