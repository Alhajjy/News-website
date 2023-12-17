import Posts from "../Posts/Posts";
import Start from "./Start";
function Home() {
    return (
        <div className="app home">
            <Start />
            <Posts />
        </div>
    );
}
export default Home;
