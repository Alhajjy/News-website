import "./styles/normalize.css";
import "./App.scss";
import "./styles/all.scss";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Articles from "./pages/Articles/Articles";
import Categories from "./pages/Categories/Categories";
import { Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts/Posts";
import Authn from "./pages/Auth/Authn";
import PrivateRoutes from "./pages/Auth/PrivateRoutes";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/*" element={<Navbar />} />
                    <Route path="/" element={<Home />} exact />
                    <Route path="articles" element={<Articles />} />
                    <Route path="topics" element={<Categories />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="about" element={<About />} />
                </Route>
                <Route path="/login" element={<Authn />} />
            </Routes>
            <Footer />
            <p className="rights">2023 &copy; ALL RIGHTS RESERVED</p>
        </div>
    );
}

export default App;
