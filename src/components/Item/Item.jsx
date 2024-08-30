import { useState } from "react";
import "./Item.css"; // Assuming you have a CSS file for styling

const Item = ({ item }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToBag = () => {
    setIsAdded(true);
  };

  return (
    <div className="item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <button
        className={`add-to-bag-btn ${isAdded ? "added" : ""}`}
        onClick={handleAddToBag}
        disabled={isAdded} // Disable the button once it's added
      >
        {isAdded ? "Added" : "Add to Bag"}
      </button>
    </div>
  );
};

export default Item;
