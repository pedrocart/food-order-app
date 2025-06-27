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

  function openModal(type) {
    if (type === "cart") {
      setCartIsOpen(true);
      setCheckoutIsOpen(false);
      console.log("Cart modal opened");
    }
    if (type === "checkout") {
      setCartIsOpen(false);
      setCheckoutIsOpen(true);
      console.log("Checkout modal opened");
    }
  }

  function closeCart() {
    console.log("Cart modal closed.");
    setCartIsOpen(false);
  }

  function closeCheckout() {
    console.log("Checkout modal closed.");
    setCheckoutIsOpen(false);
  }

  return (
    <>
      <Modal open={cartIsOpen} onClose={closeCart}>
        <Cart
          onClose={closeCart}
          openCheckout={() => {
            openModal("checkout");
          }}
        />
      </Modal>
      <Modal open={checkoutIsOpen} onClose={closeCheckout}>
        <Checkout
          onClose={closeCheckout}
        />
      </Modal>
      <Header onType={openModal} />
      <main>
        <MealsContextProvider>
          <Meals />
        </MealsContextProvider>
      </main>
    </>
  );
}

export default App;
