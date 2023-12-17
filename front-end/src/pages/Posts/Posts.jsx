import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import json from "../../components/data.json";
import { Link } from "react-router-dom";
import Post from "./Post";
function Posts() {
    return (
        <div className="posts-summary">
            <h1 className="main-title">POSTS</h1>
            <div className="posts-con">
                <Post />
            </div>
            <Link to={json.pths[3][0]}>
                <span className="more main-btn">More Posts</span>
            </Link>
        </div>
    );
}
export default Posts;
