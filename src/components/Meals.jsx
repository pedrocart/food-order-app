import { useContext, useState } from "react";
import { MealsContext } from "../store/meals-context";

export default function Meals({ handleAddToCart }) {
  const { meals, isFetching, error } = useContext(MealsContext);

  // Using State to prevent multiple additions to the cart
  // Set automatically handles uniqueness
  const [addingItems, setAddingItems] = useState(new Set());

  // Function to handle adding items to the cart with Debounce
  const handleAddToCartWithDebounce = async (mealId, mealName, mealPrice) => {
    if (addingItems.has(mealId)) {
      return; // Prevent adding the same item multiple times
    }

    setAddingItems( prev => new Set([...prev, mealId]));
    handleAddToCart(mealId, mealName, mealPrice);

    // Reset after a short delay
    setTimeout(() => {
      setAddingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(mealId);
        return newSet;
      });
    }, 200);
  };

  return (
    <div id="meals">
      {isFetching && <p>Loading meals...</p>}
      {error && <p className="error">{error.message}</p>}
      {!isFetching && !error && meals.length === 0 && <p>No meals found.</p>}
      {!isFetching && !error && meals.length > 0}
      {meals.map((meal) => (
        <div className="meal-item" key={meal.id}>
          <article>
            <img
              src={`http://localhost:3000/${meal.image}`}
              alt={meal.description}
            />
            <h3>{meal.name}</h3>
            <div className="meal-item-description">
              <p>{meal.description}</p>
            </div>
            <div className="meal-item-price">
              <span>${meal.price}</span>
            </div>
            <div className="meal-item-actions">
              <button
                className="button"
                type="button"
                disabled={addingItems.has(meal.id)}
                onClick={() => handleAddToCartWithDebounce(meal.id, meal.name, meal.price)}
              >
                {addingItems.has(meal.id) ? "Adding..." : "Add to Cart"}
              </button>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
