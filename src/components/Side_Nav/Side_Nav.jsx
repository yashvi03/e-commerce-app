import "./Side_Nav.css";

const Side_Nav = ({ handleCategoryClick, categories }) => {
  return (
    <div className="side-container"> 
      <div className="side-nav">
        <div className="section">
          <h3 className="section-title">
            <span className="material-symbols-outlined">new_releases</span>New
            Releases
          </h3>
          <ul className="items-list">
            <li className="item-list" onClick={() => handleCategoryClick("Last 30 days")}>
              Last 30 days
            </li>
            <li className="item-list" onClick={() => handleCategoryClick("This week")}>This week</li>
            <li className="item-list" onClick={() => handleCategoryClick("Next Week")}>Next Week</li>
          </ul>
        </div>

        <div className="section">
          <h3 className="section-title">
            <span className="material-symbols-outlined">star</span>Recommended
          </h3>
          <ul className="items-list" >
            <li className="item-list" onClick={() => handleCategoryClick("Best this year")}>
              Best this year
            </li>
            <li className="item-list" onClick={() => handleCategoryClick("Popular in 2023")}>
              Popular in 2023
            </li>
            <li className="item-list" onClick={() => handleCategoryClick("All time Top")}>
              All time Top
            </li>
          </ul>
        </div>

        <div className="section categories">
          <h3 className="section-title">
            <span className="material-symbols-outlined">menu_book</span>
            Categories
          </h3>
          <ul className="genres">
            {categories.map((category, index) => (
              <li className="item-list" key={index} onClick={() => handleCategoryClick(category)}>
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Side_Nav;
