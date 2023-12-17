import supporter from "../assets/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover 1.svg";
import twitter from "../assets/media/twitter.svg";
import youtube from "../assets/media/youtube.svg";
import discord from "../assets/media/discord.svg";
import facebook from "../assets/media/facebook.svg";
import gmail from "../assets/media/gmail.svg";
import telegram from "../assets/media/telegram.svg";
import whatsapp from "../assets/media/whatsapp.svg";
import { useEffect, useState } from "react";
function Footer() {
    const media = [
        [
            [twitter, "twitter"],
            [youtube, "youtube"],
            [discord, "discord"],
            [facebook, "facebook"],
        ],
        [
            [gmail, "gmail"],
            [telegram, "telegram"],
            [whatsapp, "whatsapp"],
        ],
    ];
    const [data, setData] = useState([]);
    const link = "http://localhost:3001/";
    useEffect(() => {
        fetch(link + "statics").then((res) =>
            res.json().then((json) => setData(...json))
        );
    }, []);
    return (
        <div className="footer">
            <p>{data.footer_text}</p>
            <div class="support">
                <h1 className="main-title">SUPPORTERS</h1>
                <div class="all-sub">
                    <div class="image sub hoverable">
                        <img src={supporter} alt="logo" />
                    </div>
                    <div class="image sub hoverable">
                        <img src={supporter} alt="logo" />
                    </div>
                    <div class="image sub hoverable">
                        <img src={supporter} alt="logo" />
                    </div>
                    <div class="image sub hoverable">
                        <img src={supporter} alt="logo" />
                    </div>
                </div>
            </div>
            <div class="contact">
                <div class="links">
                    <div class="follow">
                        <h3>Follow us: </h3>
                        {media[0].map((e) => (
                            <div class={`${e[1]} icon hoverable`}>
                                <img src={e[0]} alt="logo" />
                            </div>
                        ))}
                    </div>
                    <div class="cont">
                        <h3>Contact us: </h3>
                        {media[1].map((e) => (
                            <div class={`${e[1]} icon hoverable`}>
                                <img src={e[0]} alt="logo" />
                            </div>
                        ))}
                    </div>
                </div>
                <div class="quote">
                    {data.quote}
                    <br />
                    {data.author}
                </div>
            </div>
        </div>
    );
}
export default Footer;
