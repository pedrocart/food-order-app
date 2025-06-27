import { useState } from "react";

import Header from "./components/Header";
import Meals from "./components/Meals";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import { MealsContextProvider } from "./store/meals-context";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [checkoutIsOpen, setCheckoutIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function openModal(type) {
    if (type === "cart") {
      setCartIsOpen(true);
      setCheckoutIsOpen(false);
      // console.log("Cart modal opened");
    }
    if (type === "checkout") {
      setCartIsOpen(false);
      setCheckoutIsOpen(true);
      // console.log("Checkout modal opened");
    }
  }

  function closeCart() {
    // console.log("Cart modal closed.");
    setCartIsOpen(false);
  }

  function closeCheckout() {
    // console.log("Checkout modal closed.");
    setCheckoutIsOpen(false);
  }

  function handleAddToCart(mealId, mealName, mealPrice) {
    // Logic to add the meal to the cart
    const newCartItem = {
      id: mealId,
      name: mealName,
      price: mealPrice,
      quantity: 1, // Assuming we start with a quantity of 1
    };
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === mealId
      );
      if (existingItemIndex >= 0) {
        // If the item already exists, update its quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      }
      // If the item does not exist, add it to the cart
      return [...prevItems, newCartItem];
    });
  }

  function handlePlusItem(mealId) {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === mealId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return updatedItems;
    });
    console.log("Plus item clicked for meal ID:", mealId);
  }

  function handleMinusItem(mealId) {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) => {
          if (item.id === mealId) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              // If quantity is 1, remove the item from the cart
              return null;
            }
          }
          return item;
        })
        .filter((item) => item !== null); // Filter out null items
      return updatedItems;
    });
    console.log("Minus item clicked for meal ID:", mealId);
  }

  return (
    <>
      <Modal open={cartIsOpen} onClose={closeCart}>
        <Cart
          handlePlusItem={handlePlusItem}
          handleMinusItem={handleMinusItem}
          cartItems={cartItems}
          onClose={closeCart}
          openCheckout={() => {
            openModal("checkout");
          }}
        />
      </Modal>
      <Modal open={checkoutIsOpen} onClose={closeCheckout}>
        <Checkout onClose={closeCheckout} cartItems={cartItems} />
      </Modal>
      <Header onType={openModal} cartItems={cartItems} />
      <main>
        <MealsContextProvider>
          <Meals handleAddToCart={handleAddToCart} />
        </MealsContextProvider>
      </main>
    </>
  );
}

export default App;
