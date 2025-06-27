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
      console.log("Cart modal opened");
    }
    if (type === "checkout") {
      setCheckoutIsOpen(true);
      console.log("Checkout modal opened");
    }
  }

  function setModalIsOpen() {
    setCartIsOpen(false);
    setCheckoutIsOpen(false);
    console.log("Modal closed");
  }

  return (
    <>
      <Modal open={cartIsOpen} onClose={() => setModalIsOpen()}>
        <Cart />
      </Modal>
      <Modal open={checkoutIsOpen} onClose={() => setModalIsOpen()}>
        <Checkout />
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
