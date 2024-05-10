import { useNavigate } from "react-router-dom";
import { HeaderBox } from "../Components/HeaderBox";
import { InputBox } from "../Components/InputBox";
import { Button } from "../Components/Button";
import { Option } from "../Components/Option";
import { useState, useCallback } from "react";
import axios from "axios";

export const Signup = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const token = localStorage.getItem("token");

    const Loggedin = useCallback(() => {
        if (token) {
            navigate("/dashboard");
        }
    }, [token, navigate]);

    Loggedin(); // Check if user is already logged in on component mount

    const handleSignup = useCallback(async () => {
        try {
            const response = await axios.post("https://paymentbackend.onrender.com/api/v1/user/signup", {
                firstName,
                lastName,
                username,
                password
            });
            localStorage.setItem("token", response.data.token);
            if (response.data.token) {
                navigate("/dashboard");
            }
            
        } catch (error) {
            if(error.response.status==411)return alert("Email already taken / Incorrect inputs")
        }
    }, [firstName, lastName, username, password, navigate]);

    return (
        <div className="flex justify-center min-h-screen bg-gray-700 ">
            <div className="bg-gray-100 h-35 w-30 rounded-md m-16 ">
                <HeaderBox label={"Sign Up"}></HeaderBox>
                <div className="text-gray-500 m-2 ">
                    <p className="pl-6">Enter your information to create an </p>
                    <div className="flex justify-center">account</div>
                </div>
                <InputBox onChange={(e) => setFirstName(e.target.value)} heading={"First Name"}></InputBox>
                <InputBox onChange={(e) => setLastName(e.target.value)} heading={"Last Name"}></InputBox>
                <InputBox onChange={(e) => setUsername(e.target.value)} heading={"Email"}></InputBox>
                <InputBox onChange={(e) => setPassword(e.target.value)} heading={"Password"}></InputBox>
                <Button onclick={handleSignup} value={"Sign UP"}></Button>
                <Option main={"Already have an account?"} sub={"Login"} to={'/signin'}></Option>
            </div>
        </div>
    );
};
