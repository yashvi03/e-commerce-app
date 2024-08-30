import Navbar from "../Navbar/Navbar";
import book1 from "../../assets/book1.jpg";
import book3 from "../../assets/book3.jpg";
import book4 from "../../assets/book4.jpg";
import book5 from "../../assets/book5.jpg";
import { Outlet } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="main">
        <div className="main-sec">
          <div className="main-text">
            <p className="title">
              MEET YOUR NEXT<br></br>
              <span>favorite book</span>
            </p>
            <p className="description">
              &quotExplore a curated selection of captivating reads across genres,
              handpicked to ignite your imagination and keep you turning pages.
              Find your next literary adventure today!&quot
            </p>
          </div>
          <img className="main-img" src={book3} alt="image" />

        </div>

        <div className="img-container">
          <div className="img-1">
            <img className="home-page-img" src={book1} alt="image" />
            <img className="home-page-img" src={book5} alt="image" />
          </div>
          <div className="img-2">
            <img className="home-page-img" src={book4} alt="image" />
            <img className="home-page-img" src={book4} alt="image" />
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default HomePage;
