import React, { useState } from "react";
import Auth from "./Auth";

function Authn() {
    const [login, setLogin] = useState(false);
    const showLogin = () => {
        setLogin(!login);
    };
    return (
        <div className="con choose">
            <div className="sign-toggle">
                <div className={`way register ${login ? "w-sign" : "b-sign"}`}>
                    <span onClick={showLogin}>Register</span>
                </div>
                <div className={`way login ${login ? "b-sign" : "w-sign"}`}>
                    <span onClick={showLogin}>Login</span>
                </div>
            </div>
            <Auth login={login} />
        </div>
    );
}

export default Authn;
