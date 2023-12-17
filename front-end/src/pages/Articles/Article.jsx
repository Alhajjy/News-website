import { faEye, faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picture from "../../assets/sliders/tourism.jpg";
import { useEffect, useState } from "react";
export default function Article() {
    const [ar, setar] = useState([]);
    const link = "http://localhost:3001/";
    useEffect(() => {
        fetch(link + "article").then((res) =>
            res.json().then((json) => setar(...json))
        );
    }, []);
    console.log(ar);
    return (
        <div className="article con">
            <div className="content">
                <div className="details">
                    <div className="date">{ar.date}</div>
                    <div className="writer hoverable">
                        <FontAwesomeIcon icon={faPenNib} />
                        {" " + ar.writer}
                    </div>
                </div>
                <div className="text">
                    <h2>{ar.title}</h2>
                    <p>{ar.article}</p>
                </div>
            </div>
            <div className="suggested">
                <h2>Suggested</h2>
                <div className="art-card hoverable">
                    <div className="image">
                        <img src={picture} alt="imagy" />
                    </div>
                    <div className="down">
                        <p className="title">
                            The title is the title allright dog, so get out from
                            here
                        </p>
                        <div className="details">
                            <span className="writer">
                                <FontAwesomeIcon icon={faPenNib} />
                                Tolstoy
                            </span>
                            <span className="views">
                                1.1K <FontAwesomeIcon icon={faEye} />
                            </span>
                            <span className="time">23:23 | 20.20.2031</span>
                        </div>
                    </div>
                </div>
                <div className="art-card hoverable">
                    <div className="image">
                        <img src={picture} alt="imagy" />
                    </div>
                    <div className="down">
                        <p className="title">
                            The title is the title allright dog, so get out from
                            here
                        </p>
                        <div className="details">
                            <span className="writer">
                                <FontAwesomeIcon icon={faPenNib} />
                                Tolstoy
                            </span>
                            <span className="views">
                                1.1K <FontAwesomeIcon icon={faEye} />
                            </span>
                            <span className="time">23:23 | 20.20.2031</span>
                        </div>
                    </div>
                </div>
                <div className="art-card hoverable">
                    <div className="image">
                        <img src={picture} alt="imagy" />
                    </div>
                    <div className="down">
                        <p className="title">
                            The title is the title allright dog, so get out from
                            here
                        </p>
                        <div className="details">
                            <span className="writer">
                                <FontAwesomeIcon icon={faPenNib} />
                                Tolstoy
                            </span>
                            <span className="views">
                                1.1K <FontAwesomeIcon icon={faEye} />
                            </span>
                            <span className="time">23:23 | 20.20.2031</span>
                        </div>
                    </div>
                </div>
                <div className="art-card hoverable">
                    <div className="image">
                        <img src={picture} alt="imagy" />
                    </div>
                    <div className="down">
                        <p className="title">
                            The title is the title allright dog, so get out from
                            here
                        </p>
                        <div className="details">
                            <span className="writer">
                                <FontAwesomeIcon icon={faPenNib} />
                                Tolstoy
                            </span>
                            <span className="views">
                                1.1K <FontAwesomeIcon icon={faEye} />
                            </span>
                            <span className="time">23:23 | 20.20.2031</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
