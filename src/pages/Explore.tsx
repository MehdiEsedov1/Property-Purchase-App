import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";

export default function Explore() {
  return (
    <div className="explore-container">
      <header>
        <p className="page-header">Explore</p>
      </header>
      <main>
        <p className="explore-category-heading">Categories</p>
        <div className="explore-categories">
          <Link to="/category/rent">
            <img
              src={rentCategoryImage}
              alt="rent"
              className="explore-category-img"
            />
            <p className="explore-category-name">Places for rent</p>
          </Link>
          <Link to="/category/sale">
            <img
              src={sellCategoryImage}
              alt="sale"
              className="explore-category-img"
            />
            <p className="explore-category-name">Places for sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
