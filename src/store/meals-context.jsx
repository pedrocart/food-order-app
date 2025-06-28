import { createContext, useEffect, useState } from "react";

export const MealsContext = createContext({
  meals: [],
  isFetching: false,
  error: null,
  setMeals: () => {},
  submitOrder: () => {},
});

export function MealsContextProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMeals() {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:3000/meals");
        if (!response.ok) {
          throw new Error("Failed to fetch meals.");
        }
        const data = await response.json();
        setMeals(data);
      } catch (err) {
        setError({
          message: err.message || "Failed to fetch meals.",
        });
      }
      setIsFetching(false);
    }

    fetchMeals();
  }, []);

  async function submitOrder(checkoutData) {
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkoutData),
    });

    if (!response.ok) {
      return;
    }

    const savedOrder = await response.json();
    console.log("Order saved successfully:", savedOrder);

  }

  return (
    <MealsContext.Provider value={{ meals, isFetching, error, setMeals }}>
      {children}
    </MealsContext.Provider>
  );
}
