import React, { useEffect, useState } from "react";
import image1 from "../../assets/sliders/tourism2.jpg";
import image2 from "../../assets/sliders/tourism2.jpg";
import image3 from "../../assets/sliders/tourism2.jpg";

import twitter from "../../assets/media/twitter.svg";
import facebook from "../../assets/media/facebook.svg";
import youtube from "../../assets/media/youtube.svg";
import gmail from "../../assets/media/gmail.svg";
import telegram from "../../assets/media/telegram.svg";
import whatsapp from "../../assets/media/whatsapp.svg";
import discord from "../../assets/media/discord.svg";

export default function About() {
    const images = [image1, image2, image3];
    const media = [
        twitter,
        facebook,
        youtube,
        gmail,
        telegram,
        whatsapp,
        discord,
    ];
    const [data, setData] = useState([]);
    const link = "http://localhost:3001/";
    useEffect(() => {
        fetch(link + "statics").then((res) =>
            res.json().then((json) => setData(...json))
        );
    }, []);
    return (
        <div className="about">
            <div className="images">
                {images.map((e) => (
                    <div className="image">
                        <img src={e} alt="tourism" />
                    </div>
                ))}
            </div>
            <div className="down">
                <div className="text">
                    <h1>bla bla bla</h1>
                    <p className="text">{data.about_text}</p>
                </div>
                <div className="media">
                    {media.map((e) => (
                        <div className="image hoverable">
                            <img src={e} alt="logo" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
