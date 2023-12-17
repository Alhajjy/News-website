import Axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";

const Auth = ({ login }) => {
    const [cookies, setCookies] = useCookies("accessing_man");
    const removeCookies = () => {
        setCookies("accessing_man", "");
        window.localStorage.removeItem("userId");
        window.location.reload(false);
    };
    return (
        <div>
            {cookies.accessing_man ? (
                <button onClick={removeCookies} className="main-btn logout">
                    Log Out
                </button>
            ) : (
                <>{login ? <Login /> : <Register />}</>
            )}
        </div>
    );
};

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:3001/admins", {
            method: "post",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: {
                "Content-Type": "application/json; chrset=UTF-8",
            },
        }).then(
            alert(`user created:
            username: ${username}
            password: ${password}`)
        );
    };
    return (
        <Form
            label="Register"
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            onSubmit={onSubmit}
        />
    );
};
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [_, setCookies] = useCookies(["accessing_man"]);
    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await Axios.post("http://localhost:3001/login", {
            username,
            password,
        });
        setCookies("accessing_man", response.data.token);
        window.localStorage.setItem("userId", response.data.adminID);
        window.location.reload(false);
        console.log(response);
    };
    return (
        <Form
            label="Login"
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            onSubmit={onSubmit}
        />
    );
};

const Form = ({
    label,
    username,
    setUsername,
    password,
    setPassword,
    onSubmit,
}) => {
    return (
        <div className={`sign ${label}`}>
            <form onSubmit={onSubmit}>
                <h2>{label}</h2>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">password:</label>
                <input
                    type="text"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="main-btn">
                    {label}
                </button>
            </form>
        </div>
    );
};

export default Auth;
