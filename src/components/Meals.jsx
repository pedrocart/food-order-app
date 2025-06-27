import { useContext } from 'react';
import { MealsContext } from '../store/meals-context';

export default function Meals() {

  // Here you would typically use the MealsContext to fetch meals data
  // For this example, we will just return a static meal item 
  const { meals, isFetching, error } = useContext(MealsContext);

  return (
    <div id="meals">
      {isFetching && <p>Loading meals...</p>}
      {error && <p className="error">{error.message}</p>}
      {!isFetching && !error && meals.length === 0 && <p>No meals found.</p>}
      {!isFetching && !error && meals.length > 0}
      {meals.map((meal) => (
        <div className="meal-item" key={meal.id}>
          <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.description} />
            <h3>{meal.name}</h3>
            <div className="meal-item-description">
              <p>{meal.description}</p>
            </div>
            <div className="meal-item-price">
              <span>${meal.price}</span>
            </div>
            <div className="meal-item-actions">
              <button className="button" type="button">Add to Cart</button>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}