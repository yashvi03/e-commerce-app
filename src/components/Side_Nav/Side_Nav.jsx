import "./Side_Nav.css";

const Side_Nav = ({ handleCategoryClick, categories }) => {
  return (
    <div className="side-container"> 
      <div className="side-nav">
        {/* New Releases Section */}
        <div className="section">
          <h3 className="section-title">
            <span className="material-symbols-outlined">new_releases</span>New Releases
          </h3>
          <ul className="items-list">
            <li className="item-list" onClick={() => handleCategoryClick("Last 30 days", 'time')}>
              Last 30 days
            </li>
            <li className="item-list" onClick={() => handleCategoryClick("This week", 'time')}>
              This week
            </li>
            <li className="item-list" onClick={() => handleCategoryClick("Next Week", 'time')}>
              Next Week
            </li>
          </ul>
        </div>

        {/* Recommended Section */}
        <div className="section">
          <h3 className="section-title">
            <span className="material-symbols-outlined">star</span>Recommended
          </h3>
          <ul className="items-list">
            <li className="item-list" onClick={() => handleCategoryClick("Best this year", 'recommendation')}>
              Best this year
            </li>
            <li className="item-list" onClick={() => handleCategoryClick("Popular in 2023", 'recommendation')}>
              Popular in 2023
            </li>
            <li className="item-list" onClick={() => handleCategoryClick("All time Top", 'recommendation')}>
              All time Top
            </li>
          </ul>
        </div>

        {/* Categories Section */}
        <div className="section categories">
          <h3 className="section-title">
            <span className="material-symbols-outlined">menu_book</span>Categories
          </h3>
          <ul className="genres">
            {categories.map((category, index) => (
              <li className="item-list" key={index} onClick={() => handleCategoryClick(category, 'category')}>
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
