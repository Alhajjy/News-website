import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostSlider from "../../components/Post-Slider";
import { useEffect, useState } from "react";
import { faBan, faBookmark } from "@fortawesome/free-solid-svg-icons";

function Post() {
    const [data, setData] = useState([]);
    const [save, setSave] = useState(false);
    const [hide, setHide] = useState(false);
    const saveIt = () => {
        setSave(!save);
    };
    const hideIt = () => {
        setHide(!hide);
    };
    useEffect(() => {
        fetch(`http://localhost:3001/posts`).then((res) =>
            res.json().then((json) => setData(json))
        );
    }, []);
    return (
        <>
            {data.map((e) => (
                <div className="post">
                    <PostSlider />
                    <div className="title">{e.title}</div>
                    <p>{e.text}</p>
                    <div className="btns">
                        <div
                            className={`unshow hoverable ${hide ? "hide" : ""}`}
                            onClick={hideIt}
                        >
                            <FontAwesomeIcon icon={faBan} />
                        </div>
                        <span className="main-btn">Same Posts</span>
                        <div
                            className={`save hoverable ${save ? "saved" : ""}`}
                            onClick={saveIt}
                        >
                            <FontAwesomeIcon icon={faBookmark} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
export default Post;
